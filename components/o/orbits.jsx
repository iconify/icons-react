import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fv5pcnpmp.css';
import '../../css/b/bnxnx5baf.css';
import '../../css/n/nli5obcdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fv5pcnpmp"/><path class="bnxnx5baf"/><path class="nli5obcdr"/></g>`,
		"fallback": "tabler:orbits",
	});
}

export default Component;
