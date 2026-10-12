import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yenqbtb5g.css';
import '../../css/e/e_r9uibzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yenqbtb5g"/><path class="e_r9uibzg"/>`,
		"fallback": "lucide-extended:user-round-check-filled",
	});
}

export default Component;
