import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewn1ke3br.css';
import '../../css/e/e3k76dbuq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewn1ke3br"/><path class="e3k76dbuq"/>`,
		"fallback": "energy-icons:sidebar-20",
	});
}

export default Component;
