import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7go70bac.css';
import '../../css/d/d24t00g2w.css';
import '../../css/w/w2duh05jb.css';
import '../../css/c/c0embfb_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7go70bac"/><path class="d24t00g2w"/><path class="w2duh05jb"/><path class="c0embfb_h"/>`,
		"fallback": "energy-icons:microscope-20",
	});
}

export default Component;
