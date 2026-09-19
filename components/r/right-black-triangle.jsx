import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr2kdabse.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr2kdabse"/>`,
		"fallback": "dinkie-icons:right-black-triangle",
	});
}

export default Component;
