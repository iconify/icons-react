import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ar4a8jbwp.css';
import '../../css/u/u3a76bcvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ar4a8jbwp"/><path class="u3a76bcvs"/></g>`,
		"fallback": "tdesign:router-wave",
	});
}

export default Component;
