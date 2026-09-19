import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxt5wfc_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxt5wfc_b"/>`,
		"fallback": "game-icons:saber-slash",
	});
}

export default Component;
