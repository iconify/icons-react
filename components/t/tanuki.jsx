import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3-hrsbwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3-hrsbwj"/>`,
		"fallback": "pajamas:tanuki",
	});
}

export default Component;
