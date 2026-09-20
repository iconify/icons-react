import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw11znqtx.css';
import '../../css/w/wmpwcbcvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xw11znqtx"/><path class="wmpwcbcvx"/>`,
		"fallback": "stash:marker-solid",
	});
}

export default Component;
