import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emz203hin.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emz203hin"/>`,
		"fallback": "radix-icons:open-in-new-window",
	});
}

export default Component;
