import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b487_1s0a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b487_1s0a"/>`,
		"fallback": "f7:pencil-slash",
	});
}

export default Component;
