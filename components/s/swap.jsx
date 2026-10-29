import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpaoo99bk.css';
import '../../css/r/rnt8kobtz.css';
import '../../css/e/ecfshgrfk.css';
import '../../css/e/e1s9j5b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpaoo99bk wm-k"/><path class="rnt8kobtz wm-a"/><path class="ecfshgrfk wm-k"/><path class="e1s9j5b3x wm-a"/>`,
		"fallback": "withicons-bauhaus:swap",
	});
}

export default Component;
