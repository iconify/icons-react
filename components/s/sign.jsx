import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmpt56yqi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmpt56yqi"/>`,
		"fallback": "pinhead:sign",
	});
}

export default Component;
