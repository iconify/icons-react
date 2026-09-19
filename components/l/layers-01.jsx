import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji5xzhb-u.css';
import '../../css/v/vdsbdxbte.css';
import '../../css/b/bo29tlpqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ji5xzhb-u"/><path class="vdsbdxbte"/><path class="bo29tlpqw"/></g>`,
		"fallback": "hugeicons:layers-01",
	});
}

export default Component;
