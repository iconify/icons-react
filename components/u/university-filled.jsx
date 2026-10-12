import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq8cixbfp.css';
import '../../css/f/fp3l73glm.css';
import '../../css/h/hqg92z8bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq8cixbfp"/><path clip-rule="evenodd" class="fp3l73glm"/><path class="hqg92z8bm"/>`,
		"fallback": "lucide-extended:university-filled",
	});
}

export default Component;
