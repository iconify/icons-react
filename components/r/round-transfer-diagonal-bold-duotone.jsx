import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntj_g2bxu.css';
import '../../css/f/fg5sr67vv.css';
import '../../css/e/exa1j-bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntj_g2bxu"/><path class="fg5sr67vv"/><path class="exa1j-bcy"/>`,
		"fallback": "solar:round-transfer-diagonal-bold-duotone",
	});
}

export default Component;
