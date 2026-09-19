import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3g5p9b8f.css';
import '../../css/x/xr22nd2nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3g5p9b8f"/><path class="xr22nd2nm"/>`,
		"fallback": "boxicons:science",
	});
}

export default Component;
