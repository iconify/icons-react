import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnuza_hyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnuza_hyn"/>`,
		"fallback": "boxicons:table-columns-merge-filled",
	});
}

export default Component;
