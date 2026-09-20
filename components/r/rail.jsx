import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c466a129i.css';
import '../../css/z/zysww9lsz.css';
import '../../css/u/um8cl-nkw.css';
import '../../css/n/nzkrizz9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c466a129i"/><path class="zysww9lsz"/><path class="um8cl-nkw"/><path clip-rule="evenodd" class="nzkrizz9p"/>`,
		"fallback": "token:rail",
	});
}

export default Component;
