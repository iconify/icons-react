import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s27uf9b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s27uf9b7b"/>`,
		"fallback": "griddy-icons:user-favorite-filled",
	});
}

export default Component;
