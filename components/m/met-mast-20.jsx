import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn4zoubux.css';
import '../../css/w/wlwzuyb0k.css';
import '../../css/r/rv76zfbuo.css';
import '../../css/f/fzro0d78h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn4zoubux"/><path class="wlwzuyb0k"/><path class="rv76zfbuo"/><path class="fzro0d78h"/>`,
		"fallback": "energy-icons:met-mast-20",
	});
}

export default Component;
