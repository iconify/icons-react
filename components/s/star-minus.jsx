import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db8-kccpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db8-kccpb"/>`,
		"fallback": "lucide:star-minus",
	});
}

export default Component;
