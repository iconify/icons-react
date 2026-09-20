import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c37kw4biu.css';
import '../../css/n/nr6yb3djc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c37kw4biu"/><path class="nr6yb3djc"/>`,
		"fallback": "streamline-ultimate:server-add-bold",
	});
}

export default Component;
