import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gxe121bkm.css';
import '../../css/t/tubvicfaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gxe121bkm"/><path class="tubvicfaq"/></g>`,
		"fallback": "streamline-ultimate:programming-language-html-5",
	});
}

export default Component;
