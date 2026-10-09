import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qielwupdx.css';
import '../../css/x/x7x2mcb9a.css';
import '../../css/l/l7htvzbng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qielwupdx"/><path class="x7x2mcb9a"/><path class="l7htvzbng"/>`,
		"fallback": "energy-icons:transformer-pole-20-bold",
	});
}

export default Component;
