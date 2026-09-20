import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mjgxucckf.css';
import '../../css/b/b47f0acpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="mjgxucckf"/><path class="b47f0acpe"/></g>`,
		"fallback": "streamline-logos:magento-logo",
	});
}

export default Component;
