import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb8-6ypcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb8-6ypcb"/>`,
		"fallback": "lucide:type",
	});
}

export default Component;
