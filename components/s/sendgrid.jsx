import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p30wh0w8d.css';
import '../../css/q/qf-jq2kcn.css';
import '../../css/a/awltb5o6o.css';
import '../../css/m/m5ig3__2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p30wh0w8d"/><path class="qf-jq2kcn"/><path class="awltb5o6o"/><path class="m5ig3__2g"/>`,
		"fallback": "selfhst:sendgrid",
	});
}

export default Component;
