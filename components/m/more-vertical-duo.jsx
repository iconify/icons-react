import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvl6t4fsd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y1nzqhbxy.css';
import '../../css/g/gks5wfbfb.css';
import '../../css/s/si_kdro5v.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/d/d14d6zroq.css';
import '../../css/u/ukjazgbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvl6t4fsd secondary"/><g class="dt0cm9dhy primary"><path class="y1nzqhbxy"/><path class="gks5wfbfb"/><path class="si_kdro5v"/><path class="zrlh-6b7n"/><path class="d14d6zroq"/><path class="ukjazgbqb"/></g>`,
		"fallback": "iconaut:more-vertical-duo",
	});
}

export default Component;
