import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck3n3nbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck3n3nbso"/>`,
		"fallback": "lucide-extended:unplug-filled",
	});
}

export default Component;
