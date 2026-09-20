import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l1flu1iiu.css';
import '../../css/o/oj0g7vb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="l1flu1iiu"/><path clip-rule="evenodd" class="oj0g7vb_e"/></g>`,
		"fallback": "streamline-logos:linkedin-logo",
	});
}

export default Component;
