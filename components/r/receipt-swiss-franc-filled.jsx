import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl6ol6zfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nl6ol6zfj"/>`,
		"fallback": "lucide-extended:receipt-swiss-franc-filled",
	});
}

export default Component;
