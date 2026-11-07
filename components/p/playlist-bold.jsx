import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc4jqtbfv.css';
import '../../css/n/nt_tpccog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pc4jqtbfv"/><path class="nt_tpccog"/>`,
		"fallback": "solar:playlist-bold",
	});
}

export default Component;
