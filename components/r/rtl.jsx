import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6hkx8byj.css';

const viewBox = {"width":14,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6hkx8byj"/>`,
		"fallback": "jam:rtl",
	});
}

export default Component;
