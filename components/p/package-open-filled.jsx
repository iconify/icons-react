import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfm7feroz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lfm7feroz"/>`,
		"fallback": "lucide-extended:package-open-filled",
	});
}

export default Component;
