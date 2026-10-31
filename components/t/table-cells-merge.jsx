import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc6_pdb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc6_pdb7r"/>`,
		"fallback": "sidekickicons:table-cells-merge",
	});
}

export default Component;
