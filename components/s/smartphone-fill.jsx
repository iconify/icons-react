import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkhujqbrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fkhujqbrl"/>`,
		"fallback": "keyline-icons:smartphone-fill",
	});
}

export default Component;
