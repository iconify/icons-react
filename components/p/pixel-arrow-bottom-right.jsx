import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ascoc3bmk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ascoc3bmk"/>`,
		"fallback": "pinhead:pixel-arrow-bottom-right",
	});
}

export default Component;
