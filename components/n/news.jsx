import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nr3vuui2s.css';
import '../../css/g/gdlthgbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="nr3vuui2s"/><path class="gdlthgbji"/></g>`,
		"fallback": "lets-icons:news",
	});
}

export default Component;
