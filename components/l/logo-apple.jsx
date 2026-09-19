import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t49n7jb6b.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t49n7jb6b"/>`,
		"fallback": "f7:logo-apple",
	});
}

export default Component;
