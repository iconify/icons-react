import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmbkaq7lv.css';
import '../../css/p/pktx-jbur.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmbkaq7lv"/><path class="pktx-jbur"/>`,
		"fallback": "thesvg-color:jetbrains",
	});
}

export default Component;
