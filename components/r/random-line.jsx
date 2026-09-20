import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s412b-n-e.css';
import '../../css/m/mb0wncc3g.css';
import '../../css/a/abe0tyb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s412b-n-e"/><path class="mb0wncc3g"/><path class="abe0tyb8t"/>`,
		"fallback": "mingcute:random-line",
	});
}

export default Component;
