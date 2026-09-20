import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2lchr8db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2lchr8db"/>`,
		"fallback": "streamline-freehand:saving-bag-increase",
	});
}

export default Component;
