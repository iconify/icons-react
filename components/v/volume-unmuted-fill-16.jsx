import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i95u-8bjy.css';
import '../../css/d/dxyzwm2nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i95u-8bjy"/><path class="dxyzwm2nj"/>`,
		"fallback": "garden:volume-unmuted-fill-16",
	});
}

export default Component;
