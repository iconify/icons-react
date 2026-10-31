import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy3u8dwwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy3u8dwwx"/>`,
		"fallback": "lucide-extended:margin-right-filled",
	});
}

export default Component;
