import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouhh3jbqt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qzwcluezf.css';
import '../../css/t/tw4-rib7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouhh3jbqt secondary"/><g class="dt0cm9dhy primary"><path class="qzwcluezf"/><path class="tw4-rib7g"/></g>`,
		"fallback": "iconaut:triangle-dot-duo",
	});
}

export default Component;
