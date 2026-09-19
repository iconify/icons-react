import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvmey9bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvmey9bkv"/>`,
		"fallback": "akar-icons:text-align-justified",
	});
}

export default Component;
