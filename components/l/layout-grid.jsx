import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-877v1pe.css';
import '../../css/e/e-_uqrb9d.css';
import '../../css/i/ijz6zybvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-877v1pe"/><path class="e-_uqrb9d"/><path class="ijz6zybvh"/>`,
		"fallback": "withicons-bauhaus:layout-grid",
	});
}

export default Component;
