import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pib3_sb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pib3_sb8n"/>`,
		"fallback": "tabler:join-straight",
	});
}

export default Component;
