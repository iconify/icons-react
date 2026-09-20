import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbay4z5qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbay4z5qe"/>`,
		"fallback": "streamline-logos:proxmox-logo",
	});
}

export default Component;
