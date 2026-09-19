import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw99eqe7z.css';
import '../../css/i/ilsfesr3y.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw99eqe7z"/><path class="ilsfesr3y"/><path class="uaycyrbmu"/>`,
		"fallback": "clarity:media-changer-outline-alerted",
	});
}

export default Component;
