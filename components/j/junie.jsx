import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvc3yybml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvc3yybml"/>`,
		"fallback": "thesvg:junie",
	});
}

export default Component;
