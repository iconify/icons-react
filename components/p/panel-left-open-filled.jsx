import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjq87kk7o.css';
import '../../css/t/taok2ubed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjq87kk7o"/><path clip-rule="evenodd" class="taok2ubed"/>`,
		"fallback": "lucide-extended:panel-left-open-filled",
	});
}

export default Component;
