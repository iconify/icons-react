import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au1cl9ewo.css';
import '../../css/j/j6u-38b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au1cl9ewo"/><path class="j6u-38b7o"/>`,
		"fallback": "uim:skype-alt",
	});
}

export default Component;
