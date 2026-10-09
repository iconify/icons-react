import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4d9q7zmc.css';
import '../../css/z/zto9ilb4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4d9q7zmc"/><path class="zto9ilb4m"/>`,
		"fallback": "energy-icons:oil-20",
	});
}

export default Component;
