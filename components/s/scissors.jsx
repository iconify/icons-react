import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zcrcylsxu.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/u/uh735st5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="zcrcylsxu"/><circle class="dos_yhbgg"/><path class="uh735st5v"/></g>`,
		"fallback": "feather:scissors",
	});
}

export default Component;
