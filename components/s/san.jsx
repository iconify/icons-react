import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvcu7mk6y.css';
import '../../css/z/zzqt9rbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvcu7mk6y"/><path clip-rule="evenodd" class="zzqt9rbax"/>`,
		"fallback": "token:san",
	});
}

export default Component;
