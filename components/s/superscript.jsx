import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl9_jmpjv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl9_jmpjv"/>`,
		"fallback": "gravity-ui:superscript",
	});
}

export default Component;
