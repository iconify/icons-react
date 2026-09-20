import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fwwtz_beh.css';
import '../../css/a/azi7k547z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fwwtz_beh"/><path class="azi7k547z"/></g>`,
		"fallback": "lucide-lab:pepper-chilli",
	});
}

export default Component;
