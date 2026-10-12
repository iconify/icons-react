import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axlcm-b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axlcm-b7g"/>`,
		"fallback": "lucide-extended:triangles-centerline-dashed-vertical-filled",
	});
}

export default Component;
