import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti93n7b7m.css';
import '../../css/u/u2_dmwbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ti93n7b7m"/><path class="u2_dmwbyp"/>`,
		"fallback": "lucide-extended:mouse-right-filled",
	});
}

export default Component;
