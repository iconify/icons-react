import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrgf_rbum.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrgf_rbum"/>`,
		"fallback": "dashicons:universal-access-alt",
	});
}

export default Component;
