import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl_-elx9a.css';
import '../../css/k/ky59n46dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl_-elx9a"/><path class="ky59n46dp"/>`,
		"fallback": "solar:pill-bold",
	});
}

export default Component;
