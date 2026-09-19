import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwf5l3iwb.css';
import '../../css/a/asbceibyx.css';
import '../../css/x/xmr8z2bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gwf5l3iwb"/><circle class="asbceibyx"/><circle class="xmr8z2bep"/></g>`,
		"fallback": "feather:truck",
	});
}

export default Component;
