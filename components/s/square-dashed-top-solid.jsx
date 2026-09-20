import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqdctvbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqdctvbfq"/>`,
		"fallback": "lucide:square-dashed-top-solid",
	});
}

export default Component;
