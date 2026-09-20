import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mssm2ht1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mssm2ht1m"/>`,
		"fallback": "tabler:treasure-chest",
	});
}

export default Component;
