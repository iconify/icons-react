import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ivagpu9bt.css';
import '../../css/o/omw8bvb0u.css';
import '../../css/p/p_ckcvb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ivagpu9bt"/><path class="omw8bvb0u"/><path class="p_ckcvb-n"/></g>`,
		"fallback": "lucide:squirrel",
	});
}

export default Component;
