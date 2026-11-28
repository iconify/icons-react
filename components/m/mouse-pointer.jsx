import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz-ytj-jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz-ytj-jx"/>`,
		"fallback": "noviair-light:mouse-pointer",
	});
}

export default Component;
