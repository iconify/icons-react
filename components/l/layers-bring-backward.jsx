import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txdxjr9bn.css';
import '../../css/o/oocnttn8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txdxjr9bn"/><path class="oocnttn8r"/></g>`,
		"fallback": "streamline-freehand-color:layers-bring-backward",
	});
}

export default Component;
