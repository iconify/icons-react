import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lexve4bbt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lexve4bbt"/>`,
		"fallback": "pinhead:person-boarding-bullet-train-on-railway-track",
	});
}

export default Component;
