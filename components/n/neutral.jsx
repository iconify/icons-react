import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a6mwx9v_d.css';
import '../../css/z/z8w34vkig.css';
import '../../css/q/qo64mgbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="a6mwx9v_d"/><path class="z8w34vkig"/><path class="qo64mgbqc"/></g>`,
		"fallback": "codex:neutral",
	});
}

export default Component;
