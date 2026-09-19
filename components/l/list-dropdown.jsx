import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhomschgd.css';
import '../../css/m/mz1wsz5pm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhomschgd"/><path class="mz1wsz5pm"/>`,
		"fallback": "carbon:list-dropdown",
	});
}

export default Component;
