import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoug98bec.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f9sm5sb1s.css';
import '../../css/a/at5jq4jfg.css';
import '../../css/t/t_be4jbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zoug98bec"/><g class="dt0cm9dhy primary"><path class="f9sm5sb1s"/><path class="at5jq4jfg"/><path class="t_be4jbjc"/></g>`,
		"fallback": "iconaut:star-medal-duo",
	});
}

export default Component;
