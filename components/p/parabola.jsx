import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo-ispbyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo-ispbyt"/>`,
		"fallback": "icon-park-outline:parabola",
	});
}

export default Component;
