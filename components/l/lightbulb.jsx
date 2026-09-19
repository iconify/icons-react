import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miy_jjbxz.css';

const viewBox = {"width":22,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miy_jjbxz"/>`,
		"fallback": "et:lightbulb",
	});
}

export default Component;
