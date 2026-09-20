import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtfrwnbwr.css';
import '../../css/z/zhvv4ogqo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtfrwnbwr"/><path class="zhvv4ogqo"/>`,
		"fallback": "ooui:newspaper-rtl",
	});
}

export default Component;
