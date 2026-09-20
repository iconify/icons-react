import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qlfbajb5y.css';
import '../../css/g/gw9fwq17f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qlfbajb5y"/><path class="gw9fwq17f"/></g>`,
		"fallback": "streamline-ultimate:pin-2-alt",
	});
}

export default Component;
