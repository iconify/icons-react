import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gudpb6b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gudpb6b2p"/>`,
		"fallback": "lucide:mouse-pointer-2-off",
	});
}

export default Component;
