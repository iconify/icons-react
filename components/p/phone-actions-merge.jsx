import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zn9tgxbfj.css';
import '../../css/y/y9_9c8pbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zn9tgxbfj"/><path class="y9_9c8pbj"/></g>`,
		"fallback": "streamline-ultimate:phone-actions-merge",
	});
}

export default Component;
