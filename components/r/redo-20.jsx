import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op02w5bbu.css';
import '../../css/s/s6hyw202b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op02w5bbu"/><path class="s6hyw202b"/>`,
		"fallback": "energy-icons:redo-20",
	});
}

export default Component;
