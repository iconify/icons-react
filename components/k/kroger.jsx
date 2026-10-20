import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2tgcfa6m.css';
import '../../css/d/djx2wtber.css';
import '../../css/i/ife7vbbqx.css';
import '../../css/b/bwxcns22e.css';

const viewBox = {"width":95.1,"height":74.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2tgcfa6m"/><ellipse class="djx2wtber"/><path class="ife7vbbqx"/><path class="bwxcns22e"/>`,
		"fallback": "thesvg-color:kroger",
	});
}

export default Component;
