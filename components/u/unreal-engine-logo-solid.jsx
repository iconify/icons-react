import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rho4i-b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rho4i-b-u"/>`,
		"fallback": "streamline-logos:unreal-engine-logo-solid",
	});
}

export default Component;
