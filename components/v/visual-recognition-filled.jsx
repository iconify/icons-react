import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfwmerbfq.css';
import '../../css/z/zbqhemi-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfwmerbfq"/><path class="zbqhemi-u"/>`,
		"fallback": "tdesign:visual-recognition-filled",
	});
}

export default Component;
