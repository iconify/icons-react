import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klkm9fhwp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klkm9fhwp"/>`,
		"fallback": "dinkie-icons:magic-wand",
	});
}

export default Component;
