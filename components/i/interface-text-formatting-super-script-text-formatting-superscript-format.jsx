import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxx48lb0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxx48lb0z"/>`,
		"fallback": "streamline:interface-text-formatting-super-script-text-formatting-superscript-format",
	});
}

export default Component;
