import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ajm8uqn2u.css';
import '../../css/i/i7qqfq6et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ajm8uqn2u"/><path class="i7qqfq6et"/></g>`,
		"fallback": "reicon:watch-status",
	});
}

export default Component;
