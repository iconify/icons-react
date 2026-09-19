import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5ga2nbvw.css';
import '../../css/k/kafuruqvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g5ga2nbvw"/><path class="kafuruqvd"/></g>`,
		"fallback": "hugeicons:login-square-01",
	});
}

export default Component;
