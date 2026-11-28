import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaa74ebsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaa74ebsq"/>`,
		"fallback": "noviair-light:summit",
	});
}

export default Component;
