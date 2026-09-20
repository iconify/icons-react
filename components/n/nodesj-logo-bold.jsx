import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-vq-9o6f.css';
import '../../css/r/rdw81lbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-vq-9o6f"/><path class="rdw81lbud"/>`,
		"fallback": "streamline-ultimate:nodesj-logo-bold",
	});
}

export default Component;
