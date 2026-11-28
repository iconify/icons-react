import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv0g4bou.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w64ay2bqp.css';
import '../../css/i/itvggqbqk.css';
import '../../css/b/bankpgbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv0g4bou secondary"/><g class="dt0cm9dhy primary"><path class="w64ay2bqp"/><path class="itvggqbqk"/><path class="bankpgbzx"/></g>`,
		"fallback": "iconaut:phone-call-duo",
	});
}

export default Component;
