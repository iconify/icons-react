import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxg-2ccoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxg-2ccoq"/>`,
		"fallback": "iconaut:pilcrow-right-solid",
	});
}

export default Component;
