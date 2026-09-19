import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr34_cbtg.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr34_cbtg"/>`,
		"fallback": "fa6-solid:money-bill-1",
	});
}

export default Component;
