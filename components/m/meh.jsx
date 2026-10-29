import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utqzt6bcp.css';
import '../../css/b/bymhq5bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utqzt6bcp wm-k"/><path class="bymhq5bkw wm-a"/>`,
		"fallback": "withicons-bauhaus:meh",
	});
}

export default Component;
