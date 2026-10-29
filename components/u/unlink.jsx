import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxry_0vvk.css';
import '../../css/e/easy1lbny.css';
import '../../css/a/a_-wkp7vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yxry_0vvk"/><path class="easy1lbny wm-k"/><path class="a_-wkp7vc wm-s"/>`,
		"fallback": "withicons-bauhaus:unlink",
	});
}

export default Component;
