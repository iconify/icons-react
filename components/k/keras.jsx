import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr6ohd4vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr6ohd4vv"/>`,
		"fallback": "simple-icons:keras",
	});
}

export default Component;
