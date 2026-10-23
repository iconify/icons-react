import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2v51xbxf.css';
import '../../css/t/t4j8dhcst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j2v51xbxf"/><path class="t4j8dhcst"/></g>`,
		"fallback": "vadivam:tablet-smartphone",
	});
}

export default Component;
