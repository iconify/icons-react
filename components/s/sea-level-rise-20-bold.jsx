import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtgyfug1i.css';
import '../../css/a/an0ow8eva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtgyfug1i"/><path class="an0ow8eva"/>`,
		"fallback": "energy-icons:sea-level-rise-20-bold",
	});
}

export default Component;
