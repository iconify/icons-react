import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfhoe4bhy.css';
import '../../css/y/yqw270b7k.css';
import '../../css/f/fj3nl9b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k xfhoe4bhy"/><path class="wm-a yqw270b7k"/><path class="fj3nl9b3a wm-a"/>`,
		"fallback": "withicons-bauhaus:share-2",
	});
}

export default Component;
