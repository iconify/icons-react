import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_os-tbha.css';
import '../../css/g/g48181t2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_os-tbha"/><path class="g48181t2e"/>`,
		"fallback": "energy-icons:rabbit-48-bold",
	});
}

export default Component;
