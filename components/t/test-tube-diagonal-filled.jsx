import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhbwf-bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhbwf-bhc"/>`,
		"fallback": "lucide-extended:test-tube-diagonal-filled",
	});
}

export default Component;
