import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrt_dqbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrt_dqbuh"/>`,
		"fallback": "lucide-extended:pencil-line-filled",
	});
}

export default Component;
