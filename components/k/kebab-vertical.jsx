import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jog8yfyqx.css';

const viewBox = {"width":3,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jog8yfyqx"/>`,
		"fallback": "octicon:kebab-vertical",
	});
}

export default Component;
