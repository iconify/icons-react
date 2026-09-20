import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v462x1hwk.css';
import '../../css/j/jxnqx5b6v.css';
import '../../css/f/f23vbgbyi.css';
import '../../css/u/u9ecq3b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v462x1hwk"/><path class="jxnqx5b6v"/><path class="f23vbgbyi"/><path class="u9ecq3b1a"/></g>`,
		"fallback": "reicon:wallet-money3",
	});
}

export default Component;
