import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zgnmhybub.css';
import '../../css/b/b8rq8pb_n.css';
import '../../css/i/i6hnv8b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zgnmhybub"/><path class="b8rq8pb_n"/><path class="i6hnv8b0r"/></g>`,
		"fallback": "keyline-icons:sticky-note-off-sharp-two-tone",
	});
}

export default Component;
