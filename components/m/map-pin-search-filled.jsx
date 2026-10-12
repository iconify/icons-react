import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_vsq7l3i.css';
import '../../css/c/c375mewhe.css';
import '../../css/h/hgjylxpyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_vsq7l3i"/><path clip-rule="evenodd" class="c375mewhe"/><path clip-rule="evenodd" class="hgjylxpyl"/>`,
		"fallback": "lucide-extended:map-pin-search-filled",
	});
}

export default Component;
