import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/n-w-hytne.css';
import '../../css/t/tccd35b7g.css';
import '../../css/h/h8k41nbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="n-w-hytne"/><path class="tccd35b7g"/><path class="h8k41nbrm"/></g>`,
		"fallback": "matita:panels-top-left",
	});
}

export default Component;
