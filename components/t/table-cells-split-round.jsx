import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtus7tvkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtus7tvkc"/>`,
		"fallback": "coolicons:table-cells-split-round",
	});
}

export default Component;
