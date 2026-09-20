import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crx6jyhul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crx6jyhul"/>`,
		"fallback": "pixel:pen-nib-solid",
	});
}

export default Component;
