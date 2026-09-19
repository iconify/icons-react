import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr4grdbnk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr4grdbnk"/>`,
		"fallback": "dinkie-icons:right-hook-arrow-filled",
	});
}

export default Component;
