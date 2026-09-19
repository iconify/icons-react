import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o0n3p_e0w.css';
import '../../css/m/mzu1w-bmc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="o0n3p_e0w"/><path class="mzu1w-bmc"/></g>`,
		"fallback": "glyphs:seek-step-bold",
	});
}

export default Component;
