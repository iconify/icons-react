import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxvmi4bed.css';
import '../../css/v/v6hcovu1y.css';
import '../../css/s/s_4ewebyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxvmi4bed"/><circle class="v6hcovu1y"/><circle class="s_4ewebyp"/>`,
		"fallback": "selfhst:selfh-st",
	});
}

export default Component;
