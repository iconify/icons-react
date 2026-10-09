import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcp2pkb_d.css';
import '../../css/a/acu1a62dn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcp2pkb_d"/><path class="acu1a62dn"/>`,
		"fallback": "energy-icons:pallet-48",
	});
}

export default Component;
