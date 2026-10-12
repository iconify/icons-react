import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5ohcpp2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5ohcpp2t"/>`,
		"fallback": "lucide-extended:package-filled",
	});
}

export default Component;
