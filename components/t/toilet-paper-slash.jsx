import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl308zt5j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl308zt5j"/>`,
		"fallback": "fa-solid:toilet-paper-slash",
	});
}

export default Component;
