import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_36uib7w.css';
import '../../css/t/tli9a8yok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_36uib7w"/><path class="tli9a8yok"/>`,
		"fallback": "energy-icons:stapler-20-bold",
	});
}

export default Component;
