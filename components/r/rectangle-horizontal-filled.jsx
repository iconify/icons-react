import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x72_jn4yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x72_jn4yw"/>`,
		"fallback": "lucide-extended:rectangle-horizontal-filled",
	});
}

export default Component;
