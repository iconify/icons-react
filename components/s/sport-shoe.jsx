import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gznn9sbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gznn9sbhq"/>`,
		"fallback": "lucide:sport-shoe",
	});
}

export default Component;
