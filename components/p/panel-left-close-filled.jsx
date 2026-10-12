import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjq87kk7o.css';
import '../../css/a/ax9v0n0yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjq87kk7o"/><path clip-rule="evenodd" class="ax9v0n0yy"/>`,
		"fallback": "lucide-extended:panel-left-close-filled",
	});
}

export default Component;
