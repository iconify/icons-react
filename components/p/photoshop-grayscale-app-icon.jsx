import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5c_g2bef.css';
import '../../css/a/az_ycbvda.css';
import '../../css/u/uay5kkbma.css';

const viewBox = {"width":32,"height":31};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv2VBXd8T)"><path class="b5c_g2bef"/><path class="az_ycbvda"/></g><defs><clipPath id="SVGv2VBXd8T"><path class="uay5kkbma"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:photoshop-grayscale-app-icon",
	});
}

export default Component;
