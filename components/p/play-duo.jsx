import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1i6nebwi.css';
import '../../css/n/nsykuxbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1i6nebwi secondary"/><path class="nsykuxbye primary"/>`,
		"fallback": "iconaut:play-duo",
	});
}

export default Component;
