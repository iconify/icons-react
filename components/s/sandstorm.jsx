import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjfl6l1rp.css';
import '../../css/b/bjozrgt8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jjfl6l1rp"/><path class="bjozrgt8y"/></g>`,
		"fallback": "andrsrxn:sandstorm",
	});
}

export default Component;
