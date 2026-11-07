import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edf2mabxb.css';
import '../../css/t/tmi2ocbvf.css';
import '../../css/r/rwz9xbcdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edf2mabxb"/><path class="tmi2ocbvf"/><path class="rwz9xbcdr"/>`,
		"fallback": "solar:square-sort-horizontal-bold-duotone",
	});
}

export default Component;
