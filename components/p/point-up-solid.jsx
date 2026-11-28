import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsyie6gxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsyie6gxw"/>`,
		"fallback": "iconaut:point-up-solid",
	});
}

export default Component;
