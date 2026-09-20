import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r37ut7cmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r37ut7cmc"/>`,
		"fallback": "tabler:plug-x",
	});
}

export default Component;
