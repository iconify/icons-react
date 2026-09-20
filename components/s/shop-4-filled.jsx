import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok2n7cp7w.css';
import '../../css/w/wus1oo58n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok2n7cp7w"/><path class="wus1oo58n"/>`,
		"fallback": "tdesign:shop-4-filled",
	});
}

export default Component;
