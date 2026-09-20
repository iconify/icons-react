import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zykeq5bdg.css';
import '../../css/i/it12y4b4a.css';
import '../../css/l/l6md27rub.css';
import '../../css/n/nwrm-pbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zykeq5bdg"/><path class="it12y4b4a"/><path class="l6md27rub"/><path class="nwrm-pbrz"/></g>`,
		"fallback": "solar:sleeping-line-duotone",
	});
}

export default Component;
