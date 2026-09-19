import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg1osvr1r.css';
import '../../css/p/pgf0clsgf.css';
import '../../css/s/s0rj7obem.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg1osvr1r"/><path class="pgf0clsgf"/><path class="s0rj7obem"/>`,
		"fallback": "ion:md-megaphone",
	});
}

export default Component;
