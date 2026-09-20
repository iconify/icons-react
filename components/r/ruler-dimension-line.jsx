import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-9_fnbai.css';
import '../../css/d/d62r-hbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x-9_fnbai"/><rect class="d62r-hbfd"/></g>`,
		"fallback": "lucide:ruler-dimension-line",
	});
}

export default Component;
