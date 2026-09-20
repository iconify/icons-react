import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5wps6zzx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5wps6zzx"/>`,
		"fallback": "lsicon:path-filled",
	});
}

export default Component;
