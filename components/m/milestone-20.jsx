import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnw4jqz8j.css';
import '../../css/u/uwp-39bvg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnw4jqz8j"/><path class="uwp-39bvg"/>`,
		"fallback": "energy-icons:milestone-20",
	});
}

export default Component;
