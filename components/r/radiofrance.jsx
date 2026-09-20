import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fse-8sbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fse-8sbao"/>`,
		"fallback": "simple-icons:radiofrance",
	});
}

export default Component;
