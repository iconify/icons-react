import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9s8gdcsr.css';
import '../../css/g/gs-juzbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9s8gdcsr"/><path clip-rule="evenodd" class="gs-juzbxd"/>`,
		"fallback": "basil:sand-watch-outline",
	});
}

export default Component;
