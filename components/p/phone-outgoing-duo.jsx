import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv0g4bou.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w64ay2bqp.css';
import '../../css/w/wimiv7xii.css';
import '../../css/w/wgsm2jb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv0g4bou secondary"/><g class="dt0cm9dhy primary"><path class="w64ay2bqp"/><path class="wimiv7xii"/><path class="wgsm2jb9f"/></g>`,
		"fallback": "iconaut:phone-outgoing-duo",
	});
}

export default Component;
