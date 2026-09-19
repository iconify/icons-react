import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h51gskqbl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h51gskqbl"/>`,
		"fallback": "fa7-brands:think-peaks",
	});
}

export default Component;
