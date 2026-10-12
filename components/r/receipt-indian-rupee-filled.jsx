import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6sjyt58t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t6sjyt58t"/>`,
		"fallback": "lucide-extended:receipt-indian-rupee-filled",
	});
}

export default Component;
