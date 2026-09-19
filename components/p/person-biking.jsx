import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlva0acsb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlva0acsb"/>`,
		"fallback": "fa6-solid:person-biking",
	});
}

export default Component;
