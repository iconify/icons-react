import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brmy6cpyy.css';
import '../../css/p/p-6rxcb4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brmy6cpyy"/><path class="p-6rxcb4t"/>`,
		"fallback": "ion:logo-ionitron",
	});
}

export default Component;
