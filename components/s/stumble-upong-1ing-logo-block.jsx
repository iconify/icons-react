import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0l6w_fxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s0l6w_fxc"/>`,
		"fallback": "streamline-logos:stumble-upong-1ing-logo-block",
	});
}

export default Component;
