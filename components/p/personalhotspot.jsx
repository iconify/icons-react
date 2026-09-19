import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3dl_ybuv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3dl_ybuv"/>`,
		"fallback": "f7:personalhotspot",
	});
}

export default Component;
