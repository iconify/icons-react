import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaiu7u7ew.css';
import '../../css/l/lh649k1wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gaiu7u7ew"/><path class="lh649k1wk"/>`,
		"fallback": "basil:phone-in-outline",
	});
}

export default Component;
