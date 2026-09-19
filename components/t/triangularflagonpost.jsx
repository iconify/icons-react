import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqep0jbwj.css';
import '../../css/h/hp_5vub9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqep0jbwj"/><path class="hp_5vub9p"/>`,
		"fallback": "fxemoji:triangularflagonpost",
	});
}

export default Component;
