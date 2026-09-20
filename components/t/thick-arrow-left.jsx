import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhamwsbeh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhamwsbeh"/>`,
		"fallback": "radix-icons:thick-arrow-left",
	});
}

export default Component;
