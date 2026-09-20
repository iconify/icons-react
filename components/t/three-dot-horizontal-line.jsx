import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n77hk2kzk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n77hk2kzk"/>`,
		"fallback": "pinhead:three-dot-horizontal-line",
	});
}

export default Component;
