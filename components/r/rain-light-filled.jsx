import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boc6a8b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boc6a8b6i"/>`,
		"fallback": "tdesign:rain-light-filled",
	});
}

export default Component;
