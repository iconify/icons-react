import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm5fw8qnf.css';
import '../../css/s/sd92k-bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm5fw8qnf secondary"/><path class="primary sd92k-bou"/>`,
		"fallback": "iconaut:number-8-duo",
	});
}

export default Component;
