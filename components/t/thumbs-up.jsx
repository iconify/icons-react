import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns7uf-p8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns7uf-p8w"/>`,
		"fallback": "lucide:thumbs-up",
	});
}

export default Component;
