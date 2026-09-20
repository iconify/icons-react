import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t94plv5vu.css';
import '../../css/b/b3ao3_beh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t94plv5vu"/><rect transform="rotate(-90 7 2.75)" class="b3ao3_beh"/></g>`,
		"fallback": "streamline:interface-arrows-move-down-move-down-arrows",
	});
}

export default Component;
