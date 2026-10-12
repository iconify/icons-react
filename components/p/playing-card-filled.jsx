import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym02nvber.css';
import '../../css/u/unrc__8ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym02nvber"/><path clip-rule="evenodd" class="unrc__8ri"/>`,
		"fallback": "lucide-extended:playing-card-filled",
	});
}

export default Component;
