import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ehd4vwnqj.css';
import '../../css/j/j9ayin83g.css';
import '../../css/o/oskz19bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ehd4vwnqj"/><path class="j9ayin83g"/><path class="oskz19bxt"/></g>`,
		"fallback": "reicon:pen-nib2",
	});
}

export default Component;
