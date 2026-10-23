import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzk3koblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzk3koblg"/>`,
		"fallback": "vadivam:signal-medium",
	});
}

export default Component;
