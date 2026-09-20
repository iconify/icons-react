import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztp-9fb2o.css';
import '../../css/u/ureme7j-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztp-9fb2o"/><path class="ureme7j-f"/>`,
		"fallback": "streamline-freehand:time-hourglass-triangle",
	});
}

export default Component;
