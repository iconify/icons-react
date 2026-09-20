import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzh9s9ery.css';
import '../../css/n/n7pk_f8rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wzh9s9ery"/><path class="n7pk_f8rx"/></g>`,
		"fallback": "streamline-ultimate:programming-book",
	});
}

export default Component;
