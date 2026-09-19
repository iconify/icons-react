import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vk79llykq.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/z/zddjeg2jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vk79llykq"/><path class="tcrnivb-g"/><path class="zddjeg2jf"/></g>`,
		"fallback": "hugeicons:mail-upload-01",
	});
}

export default Component;
