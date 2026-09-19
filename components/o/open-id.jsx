import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scoxq5b8i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scoxq5b8i"/>`,
		"fallback": "cib:open-id",
	});
}

export default Component;
