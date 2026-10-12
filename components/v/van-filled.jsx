import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa-f6fb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aa-f6fb0a"/>`,
		"fallback": "lucide-extended:van-filled",
	});
}

export default Component;
