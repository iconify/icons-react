import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdab_2s4t.css';
import '../../css/p/py210wb6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdab_2s4t"/><path class="py210wb6u"/>`,
		"fallback": "energy-icons:paragraph-48",
	});
}

export default Component;
