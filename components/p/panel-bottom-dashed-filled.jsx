import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va-b4i6ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="va-b4i6ve"/>`,
		"fallback": "lucide-extended:panel-bottom-dashed-filled",
	});
}

export default Component;
