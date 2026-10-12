import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kza05hb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kza05hb4a"/>`,
		"fallback": "lucide-extended:stretch-horizontal-filled",
	});
}

export default Component;
