import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz2wyyb3z.css';
import '../../css/b/bb4klybvd.css';
import '../../css/h/h0l49j81t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz2wyyb3z"/><path class="bb4klybvd"/><path class="h0l49j81t"/>`,
		"fallback": "qlementine-icons:vst3-24",
	});
}

export default Component;
