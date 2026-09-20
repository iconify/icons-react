import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn_dg_3pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn_dg_3pp"/>`,
		"fallback": "tabler:pizza-filled",
	});
}

export default Component;
