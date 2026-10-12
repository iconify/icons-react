import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9znmuz9h.css';
import '../../css/z/zbnp1eb-z.css';
import '../../css/z/zbd81tbqz.css';
import '../../css/r/r4oyi0vwt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9znmuz9h"/><path class="zbnp1eb-z"/><path class="zbd81tbqz"/><path class="r4oyi0vwt"/>`,
		"fallback": "energy-icons:microscope-48-bold",
	});
}

export default Component;
