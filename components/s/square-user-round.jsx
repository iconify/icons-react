import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ief88gblg.css';
import '../../css/d/d1xlaxbzx.css';
import '../../css/l/l00awn5kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ief88gblg"/><path class="d1xlaxbzx"/><path class="l00awn5kw"/></g>`,
		"fallback": "hugeicons:square-user-round",
	});
}

export default Component;
