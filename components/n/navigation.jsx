import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzn8lfy8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzn8lfy8s"/>`,
		"fallback": "lucide:navigation",
	});
}

export default Component;
