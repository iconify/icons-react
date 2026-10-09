import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oshhv4dvv.css';
import '../../css/o/ohv239ijk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oshhv4dvv"/><path class="ohv239ijk"/>`,
		"fallback": "energy-icons:ladle-48-bold",
	});
}

export default Component;
