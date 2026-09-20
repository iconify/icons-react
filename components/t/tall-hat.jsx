import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y0e45cpkr.css';
import '../../css/u/ug6dxlz6p.css';
import '../../css/m/md_24xyqd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y0e45cpkr"/><path class="ug6dxlz6p"/><path class="md_24xyqd"/></g>`,
		"fallback": "streamline-flex:tall-hat",
	});
}

export default Component;
