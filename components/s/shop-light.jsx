import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txbt8sb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="txbt8sb4l"/>`,
		"fallback": "stash:shop-light",
	});
}

export default Component;
