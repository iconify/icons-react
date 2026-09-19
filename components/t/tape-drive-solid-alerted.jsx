import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9unun_6a.css';
import '../../css/q/q5don451u.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9unun_6a"/><path class="q5don451u"/><path class="uaycyrbmu"/>`,
		"fallback": "clarity:tape-drive-solid-alerted",
	});
}

export default Component;
