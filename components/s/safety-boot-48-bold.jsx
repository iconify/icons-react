import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lycgy4bwn.css';
import '../../css/c/cnifdczmc.css';
import '../../css/n/nzxup3_0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lycgy4bwn"/><path class="cnifdczmc"/><path class="nzxup3_0u"/>`,
		"fallback": "energy-icons:safety-boot-48-bold",
	});
}

export default Component;
