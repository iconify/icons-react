import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-he_3dyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-he_3dyq"/>`,
		"fallback": "noviair-light:user-arrow-right",
	});
}

export default Component;
