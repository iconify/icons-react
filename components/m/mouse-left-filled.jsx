import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf9g28u7s.css';
import '../../css/t/tbc_z2b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sf9g28u7s"/><path class="tbc_z2b1k"/>`,
		"fallback": "lucide-extended:mouse-left-filled",
	});
}

export default Component;
