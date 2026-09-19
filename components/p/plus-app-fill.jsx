import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht_xe9bkp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht_xe9bkp"/>`,
		"fallback": "f7:plus-app-fill",
	});
}

export default Component;
