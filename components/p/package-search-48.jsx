import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkv-eob5o.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/x/x-xvbvbnv.css';
import '../../css/a/auaqc0ftv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkv-eob5o"/><path class="i0wzpzqff"/><path class="x-xvbvbnv"/><path class="auaqc0ftv"/>`,
		"fallback": "energy-icons:package-search-48",
	});
}

export default Component;
