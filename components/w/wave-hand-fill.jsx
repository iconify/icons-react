import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c54w_tbjw.css';
import '../../css/i/ifd5f2bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c54w_tbjw"/><path class="ifd5f2bkp"/>`,
		"fallback": "mingcute:wave-hand-fill",
	});
}

export default Component;
