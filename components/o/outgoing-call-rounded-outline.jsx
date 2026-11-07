import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy2l7ab8f.css';
import '../../css/s/s6xf6abum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zy2l7ab8f"/><path class="s6xf6abum"/>`,
		"fallback": "solar:outgoing-call-rounded-outline",
	});
}

export default Component;
