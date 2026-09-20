import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xrleuvbus.css';
import '../../css/o/oilwyxbbm.css';
import '../../css/h/hcstxz92j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xrleuvbus"/><path class="oilwyxbbm"/><path class="hcstxz92j"/></g>`,
		"fallback": "tabler:map-pin-pin",
	});
}

export default Component;
