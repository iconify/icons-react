import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mrcwihzjm.css';
import '../../css/y/y1woexb4f.css';
import '../../css/s/slxdt3n9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="mrcwihzjm"/><circle class="y1woexb4f"/><path class="slxdt3n9x"/></g>`,
		"fallback": "streamline:money-safe-vault-saving-combo-payment-safe-money-combination-finance",
	});
}

export default Component;
