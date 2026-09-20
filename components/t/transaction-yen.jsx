import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imv8u3_9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imv8u3_9k"/>`,
		"fallback": "tabler:transaction-yen",
	});
}

export default Component;
