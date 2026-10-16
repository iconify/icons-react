import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_pz37b4w.css';
import '../../css/u/u-jkgcbqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_pz37b4w"/><path class="u-jkgcbqr"/>`,
		"fallback": "energy-icons:sticker-48-bold",
	});
}

export default Component;
