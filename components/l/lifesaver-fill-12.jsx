import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u33umgorm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u33umgorm"/>`,
		"fallback": "garden:lifesaver-fill-12",
	});
}

export default Component;
