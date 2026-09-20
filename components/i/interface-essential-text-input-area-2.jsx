import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptpts-iao.css';
import '../../css/k/kjhhmyhjp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptpts-iao"/><path class="kjhhmyhjp"/>`,
		"fallback": "streamline-pixel:interface-essential-text-input-area-2",
	});
}

export default Component;
