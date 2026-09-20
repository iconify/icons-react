import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gm08kwb2q.css';
import '../../css/o/ob790gbsh.css';
import '../../css/u/u8k-dprav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gm08kwb2q"/><path class="ob790gbsh"/><rect class="u8k-dprav"/></g>`,
		"fallback": "lucide:paint-roller",
	});
}

export default Component;
