import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikm53ybyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikm53ybyv"/>`,
		"fallback": "simple-icons:moscowmetro",
	});
}

export default Component;
