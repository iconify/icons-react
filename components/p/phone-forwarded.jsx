import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xey14xbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xey14xbcn"/>`,
		"fallback": "lucide:phone-forwarded",
	});
}

export default Component;
