import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zqdxqyb4e.css';
import '../../css/z/zu2bzewsl.css';
import '../../css/j/jgj9542vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zqdxqyb4e"/><path class="zu2bzewsl"/><path class="jgj9542vd"/></g>`,
		"fallback": "streamline-ultimate:polygon-lasso",
	});
}

export default Component;
