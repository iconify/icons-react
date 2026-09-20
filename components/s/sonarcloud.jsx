import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afpao8bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afpao8bqx"/>`,
		"fallback": "simple-icons:sonarcloud",
	});
}

export default Component;
