import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxm7zcclr.css';
import '../../css/s/sk2-r8bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxm7zcclr"/><path class="sk2-r8bwj"/>`,
		"fallback": "lucide-extended:save-off-filled",
	});
}

export default Component;
