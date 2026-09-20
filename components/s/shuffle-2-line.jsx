import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4i8x7b6y.css';
import '../../css/s/scxgi4bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4i8x7b6y"/><path class="scxgi4bsn"/>`,
		"fallback": "mingcute:shuffle-2-line",
	});
}

export default Component;
