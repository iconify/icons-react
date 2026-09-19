import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saex-v3gg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saex-v3gg"/>`,
		"fallback": "f7:selection-pin-in-out",
	});
}

export default Component;
