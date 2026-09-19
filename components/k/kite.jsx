import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eebk2rb5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eebk2rb5j"/>`,
		"fallback": "game-icons:kite",
	});
}

export default Component;
