import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msqd_f71t.css';
import '../../css/b/bh5yu-cer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msqd_f71t"/><path class="bh5yu-cer"/>`,
		"fallback": "tdesign:user-invisible-filled",
	});
}

export default Component;
