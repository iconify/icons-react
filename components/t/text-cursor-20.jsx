import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cambr2b9u.css';
import '../../css/i/iotq56wry.css';
import '../../css/j/jhhngsf8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cambr2b9u"/><path class="iotq56wry"/><path class="jhhngsf8c"/>`,
		"fallback": "energy-icons:text-cursor-20",
	});
}

export default Component;
