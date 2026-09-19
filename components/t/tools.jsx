import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd-arsb7k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd-arsb7k"/>`,
		"fallback": "entypo:tools",
	});
}

export default Component;
