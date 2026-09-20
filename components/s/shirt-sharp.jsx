import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt6snqu5h.css';
import '../../css/m/mbc2q3n8y.css';
import '../../css/p/ph59_n8kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mt6snqu5h"/><path class="mbc2q3n8y"/><path class="ph59_n8kq"/></g>`,
		"fallback": "pixelarticons:shirt-sharp",
	});
}

export default Component;
