import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i27rwib3p.css';
import '../../css/a/ajjv0bldh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="i27rwib3p"/><path class="ajjv0bldh"/></g>`,
		"fallback": "streamline:travel-wayfinder-woman-symbol-geometric-gender-female-person-human-user",
	});
}

export default Component;
