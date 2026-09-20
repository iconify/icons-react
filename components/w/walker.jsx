import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl0zh5brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl0zh5brt"/>`,
		"fallback": "mdi:walker",
	});
}

export default Component;
