import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahcm00aow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahcm00aow"/>`,
		"fallback": "mdi:weather-mist",
	});
}

export default Component;
