import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_0hpltyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_0hpltyr"/>`,
		"fallback": "pajamas:title",
	});
}

export default Component;
