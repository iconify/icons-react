import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6riji-tw.css';
import '../../css/t/t05fz5bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6riji-tw"/><path class="t05fz5bqy"/>`,
		"fallback": "lucide-extended:park-filled",
	});
}

export default Component;
