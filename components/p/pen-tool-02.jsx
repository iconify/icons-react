import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ajmvrkvif.css';
import '../../css/j/jmqirxbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ajmvrkvif"/><path class="jmqirxbzh"/></g>`,
		"fallback": "hugeicons:pen-tool-02",
	});
}

export default Component;
