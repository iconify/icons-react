import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtmozb3dv.css';
import '../../css/k/ky47cdc5i.css';
import '../../css/c/cwk6upbkl.css';
import '../../css/e/eq5p552oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dtmozb3dv"/><path class="ky47cdc5i"/><path class="cwk6upbkl"/><path class="eq5p552oc"/></g>`,
		"fallback": "solar:share-circle-line-duotone",
	});
}

export default Component;
