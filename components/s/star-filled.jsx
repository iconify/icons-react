import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng1gb-b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng1gb-b6b"/>`,
		"fallback": "lucide-extended:star-filled",
	});
}

export default Component;
