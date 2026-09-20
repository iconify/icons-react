import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0m43l0sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0m43l0sd"/>`,
		"fallback": "lucide:text-initial",
	});
}

export default Component;
