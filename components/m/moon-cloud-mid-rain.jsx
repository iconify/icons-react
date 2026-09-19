import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gq80vcsfa.css';
import '../../css/c/cb2szt4ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gq80vcsfa"/><path class="cb2szt4ki"/></g>`,
		"fallback": "hugeicons:moon-cloud-mid-rain",
	});
}

export default Component;
