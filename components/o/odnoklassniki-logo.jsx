import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w_t-2cqoq.css';
import '../../css/u/uxht71b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="w_t-2cqoq"/><path clip-rule="evenodd" class="uxht71b3j"/></g>`,
		"fallback": "streamline-logos:odnoklassniki-logo",
	});
}

export default Component;
