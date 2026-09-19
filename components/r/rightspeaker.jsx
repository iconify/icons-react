import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj-p7ldds.css';
import '../../css/o/o67rmiljq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj-p7ldds"/><path class="o67rmiljq"/>`,
		"fallback": "fxemoji:rightspeaker",
	});
}

export default Component;
