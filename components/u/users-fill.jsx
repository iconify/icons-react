import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuqu0cbld.css';
import '../../css/k/karvylbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuqu0cbld"/><path class="karvylbky"/>`,
		"fallback": "mage:users-fill",
	});
}

export default Component;
