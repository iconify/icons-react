import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr_nvx8tk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xr_nvx8tk"/>`,
		"fallback": "qlementine-icons:laptop-macbook-16",
	});
}

export default Component;
