import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz40o_bgt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tz40o_bgt"/>`,
		"fallback": "streamline:line-arrow-move-right-2-remix",
	});
}

export default Component;
