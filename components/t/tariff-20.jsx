import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2yxnrbti.css';
import '../../css/l/lcxfshbjz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2yxnrbti"/><path class="lcxfshbjz"/>`,
		"fallback": "energy-icons:tariff-20",
	});
}

export default Component;
