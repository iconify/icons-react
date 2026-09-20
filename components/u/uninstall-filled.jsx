import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw9j0hl2o.css';
import '../../css/y/ygse80efx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw9j0hl2o"/><path class="ygse80efx"/>`,
		"fallback": "tdesign:uninstall-filled",
	});
}

export default Component;
