import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_k1ojhml.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_k1ojhml"/>`,
		"fallback": "dinkie-icons:language-hebrew",
	});
}

export default Component;
