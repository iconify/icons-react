import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1qc64jvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="m1qc64jvt"/>`,
		"fallback": "wordpress:key",
	});
}

export default Component;
