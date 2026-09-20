import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfnkv0-uh.css';
import '../../css/i/i83259bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfnkv0-uh"/><path class="i83259bxo"/></g>`,
		"fallback": "tdesign:pen-ball",
	});
}

export default Component;
