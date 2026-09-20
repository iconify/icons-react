import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d60hbwahx.css';
import '../../css/c/cnqq36xqp.css';
import '../../css/z/zunq1wbfw.css';

const viewBox = {"width":120,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d60hbwahx"><path clip-rule="evenodd" class="cnqq36xqp"/><path class="zunq1wbfw"/></g>`,
		"fallback": "thesvg-color:refine-light",
	});
}

export default Component;
