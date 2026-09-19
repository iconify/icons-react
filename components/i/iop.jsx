import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egi_1pwxy.css';
import '../../css/m/md286fbip.css';
import '../../css/v/vfgn4jl3j.css';
import '../../css/a/aie4qi4ix.css';
import '../../css/e/ew1t3mblt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="egi_1pwxy"/><g class="md286fbip"><path class="vfgn4jl3j"/><path class="aie4qi4ix"/><path class="ew1t3mblt"/></g></g>`,
		"fallback": "cryptocurrency-color:iop",
	});
}

export default Component;
