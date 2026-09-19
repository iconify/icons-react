import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xkexcybcz.css';
import '../../css/v/v66g3ubbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xkexcybcz"/><path class="v66g3ubbm"/></g>`,
		"fallback": "hugeicons:store-location-01",
	});
}

export default Component;
