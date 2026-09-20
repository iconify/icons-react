import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htu6zoakn.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/s/sk_bn9biv.css';
import '../../css/y/y-uv59b2r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="htu6zoakn"/><g class="bc5-xubfs"><circle class="sk_bn9biv"/><path class="y-uv59b2r"/></g>`,
		"fallback": "openmoji:regional-indicator-f",
	});
}

export default Component;
