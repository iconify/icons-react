import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4e7xccpj.css';
import '../../css/y/yos29kf3l.css';
import '../../css/o/ohbaa0bxk.css';
import '../../css/c/ce1fk3tdi.css';
import '../../css/i/isgrz6bvr.css';
import '../../css/u/ulg6dsshy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4e7xccpj"/><path class="yos29kf3l"/><path class="ohbaa0bxk"/><path class="ce1fk3tdi"/><path class="isgrz6bvr"/><path class="ulg6dsshy"/></g>`,
		"fallback": "streamline-ultimate-color:natural-disaster-flood",
	});
}

export default Component;
