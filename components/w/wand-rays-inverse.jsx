import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvno79jxw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvno79jxw"/>`,
		"fallback": "f7:wand-rays-inverse",
	});
}

export default Component;
