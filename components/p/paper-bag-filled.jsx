import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tctg72b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tctg72b3n"/>`,
		"fallback": "lucide-extended:paper-bag-filled",
	});
}

export default Component;
