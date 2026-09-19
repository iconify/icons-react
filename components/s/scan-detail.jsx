import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pibf0kb_r.css';
import '../../css/x/xts2abbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pibf0kb_r"/><path class="xts2abbvk"/>`,
		"fallback": "boxicons:scan-detail",
	});
}

export default Component;
