import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/i/icb_hsbxl.css';
import '../../css/d/d-efe1bfg.css';
import '../../css/u/u_cz67bqt.css';
import '../../css/g/gzgxirpcf.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="icb_hsbxl"/><path class="d-efe1bfg"/><path class="u_cz67bqt"/><path class="gzgxirpcf"/></g>`,
		"fallback": "streamline-stickies-color:taxi",
	});
}

export default Component;
