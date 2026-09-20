import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1ul3kb-l.css';
import '../../css/m/meqydp0-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1ul3kb-l"/><path class="meqydp0-g"/>`,
		"fallback": "streamline-freehand:iris-scan-target",
	});
}

export default Component;
