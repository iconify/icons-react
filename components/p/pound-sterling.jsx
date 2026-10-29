import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh_qq7i6m.css';
import '../../css/s/sfehr1btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh_qq7i6m wm-k"/><path class="sfehr1btw wm-a"/>`,
		"fallback": "withicons-bauhaus:pound-sterling",
	});
}

export default Component;
