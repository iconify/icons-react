import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szg_xwy0s.css';
import '../../css/e/eozjh4bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="szg_xwy0s"/><path class="eozjh4bxe"/>`,
		"fallback": "lucide-extended:list-clock-filled",
	});
}

export default Component;
