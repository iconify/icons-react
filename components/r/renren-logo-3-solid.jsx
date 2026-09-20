import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2nudd3_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a2nudd3_l"/>`,
		"fallback": "streamline-logos:renren-logo-3-solid",
	});
}

export default Component;
