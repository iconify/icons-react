import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s81rsdbzg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s81rsdbzg"/>`,
		"fallback": "streamline:interface-text-formatting-sub-script-text-formatting-subscript-format",
	});
}

export default Component;
