import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xho3spb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xho3spb-m"/>`,
		"fallback": "lucide:stamp",
	});
}

export default Component;
