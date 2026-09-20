import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3giacbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3giacbxn"/>`,
		"fallback": "streamline-ultimate:weather-wind-flow-6",
	});
}

export default Component;
