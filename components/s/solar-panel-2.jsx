import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5intkb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5intkb-t"/>`,
		"fallback": "tabler:solar-panel-2",
	});
}

export default Component;
