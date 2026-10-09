import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0w4ecbke.css';
import '../../css/k/kq03vfbxs.css';
import '../../css/t/tnm_2jb5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0w4ecbke"/><path class="kq03vfbxs"/><path class="tnm_2jb5y"/>`,
		"fallback": "energy-icons:sleet-48-bold",
	});
}

export default Component;
