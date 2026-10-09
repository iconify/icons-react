import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj9306bap.css';
import '../../css/j/jh0o79cyk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj9306bap"/><path class="jh0o79cyk"/>`,
		"fallback": "energy-icons:kayak-20-bold",
	});
}

export default Component;
