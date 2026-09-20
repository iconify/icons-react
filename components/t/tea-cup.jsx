import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0fzakdfe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0fzakdfe"/>`,
		"fallback": "streamline:tea-cup",
	});
}

export default Component;
