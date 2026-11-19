import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g3n30yu2f.css';
import '../../css/d/dbwsp2bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g3n30yu2f"/><path class="dbwsp2bfv"/></g>`,
		"fallback": "lucide:spray-can",
	});
}

export default Component;
