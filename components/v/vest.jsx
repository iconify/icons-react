import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc62ocbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc62ocbyy"/>`,
		"fallback": "lucide-lab:vest",
	});
}

export default Component;
