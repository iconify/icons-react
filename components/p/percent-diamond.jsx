import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe6i24l2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe6i24l2h"/>`,
		"fallback": "lucide:percent-diamond",
	});
}

export default Component;
