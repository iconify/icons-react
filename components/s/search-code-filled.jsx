import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyqof_b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyqof_b5d"/>`,
		"fallback": "lucide-extended:search-code-filled",
	});
}

export default Component;
