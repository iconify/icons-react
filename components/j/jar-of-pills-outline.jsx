import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvy-dbcdt.css';
import '../../css/e/ebdqu7z2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvy-dbcdt"/><path clip-rule="evenodd" class="ebdqu7z2x"/>`,
		"fallback": "solar:jar-of-pills-outline",
	});
}

export default Component;
