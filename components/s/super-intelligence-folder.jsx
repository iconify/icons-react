import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xd-1c4bmx.css';
import '../../css/n/nz-vb558m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xd-1c4bmx"/><path class="nz-vb558m"/></g>`,
		"fallback": "hugeicons:super-intelligence-folder",
	});
}

export default Component;
