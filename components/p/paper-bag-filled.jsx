import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfl8apr-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfl8apr-t"/>`,
		"fallback": "lucide-extended:paper-bag-filled",
	});
}

export default Component;
