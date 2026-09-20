import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bey0n9euq.css';
import '../../css/b/bh5yu-cer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bey0n9euq"/><path class="bh5yu-cer"/>`,
		"fallback": "tdesign:user-visible-filled",
	});
}

export default Component;
