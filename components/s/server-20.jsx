import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eab-bra5j.css';
import '../../css/e/eokgyxb6e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eab-bra5j"/><path class="eokgyxb6e"/>`,
		"fallback": "energy-icons:server-20",
	});
}

export default Component;
