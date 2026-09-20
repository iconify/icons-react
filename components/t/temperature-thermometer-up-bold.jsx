import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-yl0srap.css';
import '../../css/f/fexna311s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-yl0srap"/><path class="fexna311s"/>`,
		"fallback": "streamline-ultimate:temperature-thermometer-up-bold",
	});
}

export default Component;
