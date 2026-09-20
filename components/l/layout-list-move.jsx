import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhj_wccit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhj_wccit"/>`,
		"fallback": "lucide-lab:layout-list-move",
	});
}

export default Component;
