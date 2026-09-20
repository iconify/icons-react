import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6bo0obgu.css';
import '../../css/e/enr0-n4yg.css';
import '../../css/i/ilakebzby.css';
import '../../css/u/u8d1k9b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6bo0obgu"/><path class="enr0-n4yg"/><path class="ilakebzby"/><path class="u8d1k9b_n"/>`,
		"fallback": "token:pkf",
	});
}

export default Component;
