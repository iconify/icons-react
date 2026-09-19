import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q62dic9ok.css';
import '../../css/k/k-dpg_bub.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q62dic9ok"/><path class="k-dpg_bub"/>`,
		"fallback": "famicons:logo-playstation",
	});
}

export default Component;
