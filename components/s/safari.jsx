import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaa9xgbbh.css';
import '../../css/q/q_br50bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaa9xgbbh"/><path class="q_br50bfg"/>`,
		"fallback": "lineicons:safari",
	});
}

export default Component;
