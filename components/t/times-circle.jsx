import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuqt_yb-q.css';
import '../../css/k/kgyn-hblg.css';
import '../../css/d/ddohpfdpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuqt_yb-q"/><path class="kgyn-hblg"/><path class="ddohpfdpt"/>`,
		"fallback": "prime:times-circle",
	});
}

export default Component;
