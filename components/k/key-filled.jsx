import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzj9gkb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzj9gkb1g"/>`,
		"fallback": "lucide-extended:key-filled",
	});
}

export default Component;
