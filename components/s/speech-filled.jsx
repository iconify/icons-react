import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu9cqub2t.css';
import '../../css/u/uusba_vxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu9cqub2t"/><path class="uusba_vxu"/>`,
		"fallback": "lucide-extended:speech-filled",
	});
}

export default Component;
