import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sj5xh6bdt.css';
import '../../css/n/nx3yiwbvs.css';
import '../../css/p/pwfngbbia.css';
import '../../css/x/x2n1igbep.css';
import '../../css/x/x92lf3goo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sj5xh6bdt"/><path clip-rule="evenodd" class="nx3yiwbvs"/><path class="pwfngbbia"/><path class="x2n1igbep"/><path class="x92lf3goo"/></g>`,
		"fallback": "streamline-color:radio",
	});
}

export default Component;
