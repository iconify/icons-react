import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgz6g14qr.css';
import '../../css/b/bwy1ik_nx.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgz6g14qr"/><path class="bwy1ik_nx"/>`,
		"fallback": "fontisto:motorcycle",
	});
}

export default Component;
