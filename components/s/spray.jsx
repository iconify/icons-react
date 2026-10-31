import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swhsg8bhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swhsg8bhz"/>`,
		"fallback": "healthicons:spray",
	});
}

export default Component;
