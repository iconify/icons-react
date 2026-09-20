import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/juo-s5bip.css';
import '../../css/y/you5cjbju.css';
import '../../css/g/geop9x_qi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="juo-s5bip"/><path class="you5cjbju"/><path class="geop9x_qi"/></g>`,
		"fallback": "streamline-plump-color:park-flat",
	});
}

export default Component;
