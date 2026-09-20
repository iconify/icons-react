import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aps518b5a.css';
import '../../css/l/l41zmqbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aps518b5a"/><path class="l41zmqbyw"/>`,
		"fallback": "streamline-ultimate:weather-sun-bold",
	});
}

export default Component;
