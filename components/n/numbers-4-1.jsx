import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xou8yqrqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xou8yqrqa"/>`,
		"fallback": "tdesign:numbers-4-1",
	});
}

export default Component;
