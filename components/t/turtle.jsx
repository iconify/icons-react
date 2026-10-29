import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svjxslq5c.css';
import '../../css/r/r5k9djb-d.css';
import '../../css/x/xgyzqtbdw.css';
import '../../css/l/lgcc12oyt.css';
import '../../css/s/sfsecrqie.css';
import '../../css/t/tnas3z5pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svjxslq5c"/><path class="r5k9djb-d"/><path class="xgyzqtbdw"/><path class="lgcc12oyt"/><path class="sfsecrqie"/><path class="tnas3z5pw"/>`,
		"fallback": "withicons-bauhaus:turtle",
	});
}

export default Component;
