import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yenqbtb5g.css';
import '../../css/g/ge98ujwjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yenqbtb5g"/><path class="ge98ujwjz"/>`,
		"fallback": "lucide-extended:user-round-minus-filled",
	});
}

export default Component;
