import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_svr_bun.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x_svr_bun"/>`,
		"fallback": "streamline:smiley-in-love-solid",
	});
}

export default Component;
