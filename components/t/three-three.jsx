import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdv_lbcih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdv_lbcih"/>`,
		"fallback": "icon-park-solid:three-three",
	});
}

export default Component;
