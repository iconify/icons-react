import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oquz9_65a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oquz9_65a"/>`,
		"fallback": "lucide-extended:triangles-centerline-dashed-horizontal-filled",
	});
}

export default Component;
