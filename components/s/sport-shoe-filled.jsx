import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j488j5z6k.css';
import '../../css/v/vbceyt5gb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j488j5z6k"/><path class="vbceyt5gb"/>`,
		"fallback": "lucide-extended:sport-shoe-filled",
	});
}

export default Component;
