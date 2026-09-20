import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uevygjbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uevygjbmt"/>`,
		"fallback": "tabler:number-90-small",
	});
}

export default Component;
