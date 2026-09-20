import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lx-plvqxg.css';
import '../../css/f/f9ah76bwf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lx-plvqxg"/><path class="f9ah76bwf"/></g>`,
		"fallback": "streamline:nature-ecology-potted-plant-tree-plant-succulent-pot",
	});
}

export default Component;
