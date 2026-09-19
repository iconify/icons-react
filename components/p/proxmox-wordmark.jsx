import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5pyydzvd.css';
import '../../css/w/w_gpdib1f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5pyydzvd"/><path class="w_gpdib1f"/>`,
		"fallback": "devicon:proxmox-wordmark",
	});
}

export default Component;
