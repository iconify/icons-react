import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh1j5ublv.css';
import '../../css/d/dzvme4b_s.css';
import '../../css/z/z8__jxbtc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uh1j5ublv"/><circle class="dzvme4b_s"/><circle class="z8__jxbtc"/>`,
		"fallback": "selfhst:smlight",
	});
}

export default Component;
