import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j8r5wkslu.css';
import '../../css/k/k60ytpwes.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j8r5wkslu"/><path class="k60ytpwes"/></g>`,
		"fallback": "streamline:nature-ecology-leaf-protect-environment-leaf-ecology-plant-plants-eco",
	});
}

export default Component;
