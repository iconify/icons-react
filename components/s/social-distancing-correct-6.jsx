import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0gb9tbuw.css';
import '../../css/a/a36zse7hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b0gb9tbuw"/><path class="a36zse7hg"/></g>`,
		"fallback": "covid:social-distancing-correct-6",
	});
}

export default Component;
