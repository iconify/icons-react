import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnjw03tfc.css';
import '../../css/s/s5cx69qdu.css';
import '../../css/t/t-z4grb_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnjw03tfc"/><path class="s5cx69qdu"/><path class="t-z4grb_h"/>`,
		"fallback": "energy-icons:manganese-48-bold",
	});
}

export default Component;
