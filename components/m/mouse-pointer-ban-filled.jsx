import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juq__jbid.css';
import '../../css/n/nh76xtbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="juq__jbid"/><path class="nh76xtbjd"/>`,
		"fallback": "lucide-extended:mouse-pointer-ban-filled",
	});
}

export default Component;
