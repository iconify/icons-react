import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqeizzbud.css';
import '../../css/u/umfrdlbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqeizzbud"/><path class="umfrdlbme"/>`,
		"fallback": "lucide-extended:shield-house-filled",
	});
}

export default Component;
