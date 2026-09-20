import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev5cacc9t.css';
import '../../css/h/hik1crb5o.css';
import '../../css/t/tq4_0rbyy.css';
import '../../css/u/u6j01ibum.css';
import '../../css/m/mj8gnep4m.css';

const viewBox = {"width":85.57,"height":88.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev5cacc9t"/><path class="hik1crb5o"/><path class="tq4_0rbyy"/><path class="u6j01ibum"/><path class="mj8gnep4m"/>`,
		"fallback": "thesvg-color:qatar-energy",
	});
}

export default Component;
