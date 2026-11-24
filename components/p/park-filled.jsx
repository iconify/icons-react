import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng1qcuzik.css';
import '../../css/k/kt2s0db6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng1qcuzik"/><path class="kt2s0db6m"/>`,
		"fallback": "lucide-extended:park-filled",
	});
}

export default Component;
