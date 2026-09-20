import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eppc3o07n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eppc3o07n"/>`,
		"fallback": "mdi:weather-partly-lightning",
	});
}

export default Component;
