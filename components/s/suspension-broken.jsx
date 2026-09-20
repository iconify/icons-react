import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d9t7gkbpm.css';
import '../../css/p/pllnv2f8o.css';
import '../../css/p/psheptbge.css';
import '../../css/p/p486gvbkz.css';
import '../../css/z/zyq3g5-qa.css';
import '../../css/m/myuublmsr.css';
import '../../css/g/g9fm93boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d9t7gkbpm"/><path class="pllnv2f8o"/><path class="psheptbge"/><path class="p486gvbkz"/><path class="zyq3g5-qa"/><path class="myuublmsr"/><path class="g9fm93boy"/></g>`,
		"fallback": "solar:suspension-broken",
	});
}

export default Component;
