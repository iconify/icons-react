import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seaurkbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="seaurkbto"/>`,
		"fallback": "lucide-extended:server-nas-filled",
	});
}

export default Component;
