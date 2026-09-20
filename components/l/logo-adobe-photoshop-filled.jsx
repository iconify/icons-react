import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6qf9oyxh.css';
import '../../css/i/i-nkzdl-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6qf9oyxh"/><path class="i-nkzdl-h"/>`,
		"fallback": "tdesign:logo-adobe-photoshop-filled",
	});
}

export default Component;
