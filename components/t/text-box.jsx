import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/w/wwsjvx.css';
import '../../css/c/c5crzc.css';
import '../../css/y/y8_5_i.css';
import '../../css/s/sqhhwo.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c wwsjvx"/><path class="a0m25c c5crzc"/><path class="a0m25c y8_5_i"/><path class="a0m25c sqhhwo"/>`,
		"fallback": "line-md:text-box",
	});
}

export default Component;
