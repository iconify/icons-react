import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/genx8sbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="genx8sbfj"/>`,
		"fallback": "griddy-icons:pet-friendly",
	});
}

export default Component;
