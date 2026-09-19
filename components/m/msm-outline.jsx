import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pix9i5bpn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pix9i5bpn"/>`,
		"fallback": "healthicons:msm-outline",
	});
}

export default Component;
