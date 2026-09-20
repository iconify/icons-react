import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm-td8bnk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hm-td8bnk"/>`,
		"fallback": "streamline:keyboard-virtual-remix",
	});
}

export default Component;
