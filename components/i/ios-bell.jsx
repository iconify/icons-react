import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9vaa1ezk.css';
import '../../css/n/nidir5bxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9vaa1ezk"/><path class="nidir5bxi"/>`,
		"fallback": "ion:ios-bell",
	});
}

export default Component;
