import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cdglkub0j.css';
import '../../css/b/bxk_ctiqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="cdglkub0j"/><path class="bxk_ctiqx"/></g>`,
		"fallback": "streamline-logos:meetup-logo",
	});
}

export default Component;
