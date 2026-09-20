import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zml8k9bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zml8k9bja"/>`,
		"fallback": "uil:toggle-off",
	});
}

export default Component;
