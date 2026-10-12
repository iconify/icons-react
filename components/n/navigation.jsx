import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvu6a5bmb.css';
import '../../css/s/spm3n6xxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jvu6a5bmb"/><path class="spm3n6xxy"/></g>`,
		"fallback": "andrsrxn:navigation",
	});
}

export default Component;
