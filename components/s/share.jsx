import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as1j6b10p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as1j6b10p"/>`,
		"fallback": "gg:share",
	});
}

export default Component;
