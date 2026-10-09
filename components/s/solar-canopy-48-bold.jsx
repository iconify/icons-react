import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps4o7zbjt.css';
import '../../css/i/ihbry8iqd.css';
import '../../css/l/l-vbyx9dn.css';
import '../../css/z/z-gc4bcqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps4o7zbjt"/><path class="ihbry8iqd"/><path class="l-vbyx9dn"/><path class="z-gc4bcqc"/>`,
		"fallback": "energy-icons:solar-canopy-48-bold",
	});
}

export default Component;
