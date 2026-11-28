import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzuj9cihv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cqhzkvbzd.css';
import '../../css/f/fl85embli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzuj9cihv secondary"/><g class="dt0cm9dhy primary"><path class="cqhzkvbzd"/><path class="fl85embli"/></g>`,
		"fallback": "iconaut:leaf-duo",
	});
}

export default Component;
