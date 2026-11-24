import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8jmy1b5l.css';
import '../../css/u/ur5d4xvrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y8jmy1b5l"/><path class="ur5d4xvrj"/>`,
		"fallback": "lucide-extended:route-off-filled",
	});
}

export default Component;
