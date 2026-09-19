import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7gnshbpu.css';
import '../../css/k/ka8c7ss6d.css';
import '../../css/d/dh3rien5h.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7gnshbpu"/><path class="ka8c7ss6d"/><path class="dh3rien5h"/>`,
		"fallback": "geo:turf-square",
	});
}

export default Component;
