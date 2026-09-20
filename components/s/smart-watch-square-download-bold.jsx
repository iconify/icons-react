import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uov_tcc-r.css';
import '../../css/r/rfvufj5tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uov_tcc-r"/><path class="rfvufj5tw"/>`,
		"fallback": "streamline-ultimate:smart-watch-square-download-bold",
	});
}

export default Component;
