import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r8w6ofebl.css';
import '../../css/v/vyd926dwy.css';
import '../../css/i/i2g-o0b8f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="r8w6ofebl"/><circle class="vyd926dwy"/><circle class="i2g-o0b8f"/></g>`,
		"fallback": "streamline:interface-edit-color-palette-color-palette-company-office-supplies-work",
	});
}

export default Component;
