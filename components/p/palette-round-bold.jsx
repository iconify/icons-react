import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcsc5yb1p.css';
import '../../css/y/yftbzgjri.css';
import '../../css/e/elfm62bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcsc5yb1p"/><path class="yftbzgjri"/><path clip-rule="evenodd" class="elfm62bxw"/>`,
		"fallback": "solar:palette-round-bold",
	});
}

export default Component;
