import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv0g4bou.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqo1orwfy.css';
import '../../css/h/h2wj-peni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv0g4bou secondary"/><g class="dt0cm9dhy primary"><path class="oqo1orwfy"/><path class="h2wj-peni"/></g>`,
		"fallback": "iconaut:phone-off-duo",
	});
}

export default Component;
