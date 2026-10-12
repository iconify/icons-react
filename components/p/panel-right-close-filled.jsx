import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq9hu5f5m.css';
import '../../css/n/ndqjaugsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aq9hu5f5m"/><path class="ndqjaugsw"/>`,
		"fallback": "lucide-extended:panel-right-close-filled",
	});
}

export default Component;
