import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxq908p6m.css';
import '../../css/m/mdkytublt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxq908p6m"/><path class="mdkytublt"/>`,
		"fallback": "lucide-extended:traffic-cone-filled",
	});
}

export default Component;
