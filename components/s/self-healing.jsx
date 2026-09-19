import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utsibk09e.css';
import '../../css/v/vke_idboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utsibk09e"/><path class="vke_idboe"/>`,
		"fallback": "eos-icons:self-healing",
	});
}

export default Component;
