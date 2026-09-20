import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-em0_zah.css';
import '../../css/y/yj5yz0rij.css';
import '../../css/p/pvl2anbys.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGJLYRnb5B)"><rect class="k-em0_zah"/><path clip-rule="evenodd" class="yj5yz0rij"/></g><defs><clipPath id="SVGJLYRnb5B"><rect class="pvl2anbys"/></clipPath></defs></g>`,
		"fallback": "skill-icons:selenium",
	});
}

export default Component;
