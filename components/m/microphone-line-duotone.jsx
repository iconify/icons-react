import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/s/szyabkg6c.css';
import '../../css/m/mc9d6_y9s.css';
import '../../css/n/nh-kspbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="szyabkg6c"/><path class="mc9d6_y9s"/><path class="nh-kspbph"/></g>`,
		"fallback": "solar:microphone-line-duotone",
	});
}

export default Component;
