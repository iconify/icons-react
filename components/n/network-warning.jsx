import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jjyi-2tjx.css';
import '../../css/c/c7ti4sbjw.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/c/c59sr6bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jjyi-2tjx"/><path class="c7ti4sbjw"/><path class="fll0uqb6i"/><path class="c59sr6bdc"/></g>`,
		"fallback": "streamline-ultimate:network-warning",
	});
}

export default Component;
