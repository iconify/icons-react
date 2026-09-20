import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sguy3dbrl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sguy3dbrl"/>`,
		"fallback": "uiw:warning",
	});
}

export default Component;
