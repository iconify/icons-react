import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty4zwew1b.css';
import '../../css/s/sar0t8bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty4zwew1b"/><path class="sar0t8bmg"/>`,
		"fallback": "bxs:layer-minus",
	});
}

export default Component;
