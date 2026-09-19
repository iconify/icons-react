import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru19-jbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru19-jbqw"/>`,
		"fallback": "griddy-icons:tune-vertical",
	});
}

export default Component;
