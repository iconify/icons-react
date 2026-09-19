import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jc_7zfapj.css';
import '../../css/w/wber-hsua.css';
import '../../css/o/ope6mwbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jc_7zfapj"/><path class="wber-hsua"/><path class="ope6mwbtt"/></g>`,
		"fallback": "hugeicons:money-not-found-02",
	});
}

export default Component;
