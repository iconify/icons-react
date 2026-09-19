import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma_s_ob1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma_s_ob1c"/>`,
		"fallback": "fxemoji:paperclip",
	});
}

export default Component;
