import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7mumeb-d.css';
import '../../css/u/uri7qm5ui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m7mumeb-d"/><path class="uri7qm5ui"/>`,
		"fallback": "mingcute:key-4-fill",
	});
}

export default Component;
