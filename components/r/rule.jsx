import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg4u3kb1v.css';
import '../../css/e/ey3vbs2kb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg4u3kb1v"/><path class="ey3vbs2kb"/>`,
		"fallback": "carbon:rule",
	});
}

export default Component;
