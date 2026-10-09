import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7ei9-u4f.css';
import '../../css/t/trjhecjvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7ei9-u4f"/><path class="trjhecjvw"/>`,
		"fallback": "energy-icons:pyramid-20",
	});
}

export default Component;
