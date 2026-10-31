import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/socnatb_v.css';
import '../../css/o/oyw6nnb2s.css';
import '../../css/x/xh-ojeezs.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="socnatb_v"/><path class="oyw6nnb2s"/><path class="xh-ojeezs"/>`,
		"fallback": "tabler-flags:martinique",
	});
}

export default Component;
