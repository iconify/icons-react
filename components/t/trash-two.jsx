import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cy6f5nbbw.css';
import '../../css/j/jkdgcnbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cy6f5nbbw"/><path class="jkdgcnbfr"/></g>`,
		"fallback": "mynaui:trash-two",
	});
}

export default Component;
