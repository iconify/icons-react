import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7uf5i4hv.css';
import '../../css/s/sgq0p14ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7uf5i4hv"/><circle class="sgq0p14ld"/>`,
		"fallback": "lets-icons:user-fill",
	});
}

export default Component;
