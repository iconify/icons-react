import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4x3c_beq.css';
import '../../css/k/k8ixw89dy.css';
import '../../css/c/cbp_2nbuo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4x3c_beq"/><path class="k8ixw89dy"/><circle class="cbp_2nbuo"/>`,
		"fallback": "ooui:user-pages-rtl",
	});
}

export default Component;
