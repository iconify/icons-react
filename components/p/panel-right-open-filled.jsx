import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucnu-4ubw.css';
import '../../css/n/ndqjaugsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ucnu-4ubw"/><path class="ndqjaugsw"/>`,
		"fallback": "lucide-extended:panel-right-open-filled",
	});
}

export default Component;
