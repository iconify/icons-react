import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khlp6_3uj.css';
import '../../css/j/jr0jy1wli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khlp6_3uj"/><circle class="jr0jy1wli"/>`,
		"fallback": "circum:wallet",
	});
}

export default Component;
