import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdrk782lf.css';
import '../../css/d/d5j3t7b4j.css';
import '../../css/k/kz4o5-4xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdrk782lf wm-k"/><path class="d5j3t7b4j wm-a"/><path class="kz4o5-4xv wm-a"/>`,
		"fallback": "withicons-bauhaus:message-square-text",
	});
}

export default Component;
