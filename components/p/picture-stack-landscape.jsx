import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2-s34bcz.css';
import '../../css/e/enx63ybox.css';
import '../../css/q/qka6f_bae.css';
import '../../css/t/tjl909b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2-s34bcz"/><path class="enx63ybox"/><path class="qka6f_bae"/><path class="tjl909b7r"/>`,
		"fallback": "streamline-freehand:picture-stack-landscape",
	});
}

export default Component;
