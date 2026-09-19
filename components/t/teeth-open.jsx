import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncaoi_bhk.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncaoi_bhk"/>`,
		"fallback": "fa-solid:teeth-open",
	});
}

export default Component;
