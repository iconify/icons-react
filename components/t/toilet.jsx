import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnc14v_4q.css';
import '../../css/y/ybty4p62m.css';
import '../../css/z/z9ft0sbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gnc14v_4q"/><path class="ybty4p62m"/><path class="z9ft0sbrs"/></g>`,
		"fallback": "andrsrxn:toilet",
	});
}

export default Component;
