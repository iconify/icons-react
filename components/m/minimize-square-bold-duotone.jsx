import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/d/dt9bosbpp.css';
import '../../css/w/wfiw3m4zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="dt9bosbpp"/><path class="wfiw3m4zf"/>`,
		"fallback": "solar:minimize-square-bold-duotone",
	});
}

export default Component;
