import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf0xr6inp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uf0xr6inp"/>`,
		"fallback": "streamline-flex:vpn-connection-solid",
	});
}

export default Component;
