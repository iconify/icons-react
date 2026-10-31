import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzem-_fgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzem-_fgn"/>`,
		"fallback": "coolicons:tally-4-fill-round",
	});
}

export default Component;
