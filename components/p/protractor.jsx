import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gltjqtbpy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gltjqtbpy"/>`,
		"fallback": "devicon-plain:protractor",
	});
}

export default Component;
