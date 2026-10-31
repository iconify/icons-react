import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ephwb-o.css';
import '../../css/v/v_devvdob.css';
import '../../css/f/fwasz7buv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ephwb-o"/><path class="v_devvdob"/><path class="fwasz7buv"/>`,
		"fallback": "tabler-flags:lebanon",
	});
}

export default Component;
