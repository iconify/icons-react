import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z792yubyf.css';
import '../../css/g/gpbvbidrc.css';
import '../../css/j/jjet8kudg.css';

const viewBox = {"width":256,"height":221};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z792yubyf"/><path class="gpbvbidrc"/><path class="jjet8kudg"/>`,
		"fallback": "thesvg-color:vue",
	});
}

export default Component;
