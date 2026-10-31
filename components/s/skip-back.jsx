import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ta40-iiti.css';
import '../../css/j/jcbj0ebeu.css';
import '../../css/g/grlr48jst.css';
import '../../css/z/zkpnsybzi.css';
import '../../css/h/hajij5bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ta40-iiti wm-shadow"/><path class="jcbj0ebeu"/><path class="grlr48jst"/><path class="zkpnsybzi"/><path class="hajij5bit"/></g>`,
		"fallback": "withicons-retro:skip-back",
	});
}

export default Component;
