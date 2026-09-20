import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/y/yg6rpf.css';
import '../../css/c/c-6jkr.css';
import '../../css/o/oy7p5c.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c yg6rpf"/><path class="a0m25c c-6jkr"/><path class="a0m25c oy7p5c"/>`,
		"fallback": "line-md:volume-plus",
	});
}

export default Component;
