import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykm2u3fal.css';
import '../../css/a/alh4zcbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykm2u3fal"/><path clip-rule="evenodd" class="alh4zcbrk"/>`,
		"fallback": "lucide-extended:shield-keyhole-filled",
	});
}

export default Component;
