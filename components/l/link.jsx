import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd12_wbjy.css';
import '../../css/i/iyp56ebds.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd12_wbjy"/><path class="iyp56ebds"/>`,
		"fallback": "icomoon-free:link",
	});
}

export default Component;
