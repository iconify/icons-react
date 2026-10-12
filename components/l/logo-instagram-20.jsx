import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7pypebcb.css';
import '../../css/c/cgjl_2bdu.css';
import '../../css/m/m2-yovtjn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7pypebcb"/><path class="cgjl_2bdu"/><path class="m2-yovtjn"/>`,
		"fallback": "garden:logo-instagram-20",
	});
}

export default Component;
