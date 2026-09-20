import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz6uku90w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz6uku90w"/>`,
		"fallback": "lucide:list-check",
	});
}

export default Component;
