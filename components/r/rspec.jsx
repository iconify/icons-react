import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzk_u8uvf.css';
import '../../css/h/hcys5pimr.css';
import '../../css/c/cltfdlb1g.css';
import '../../css/m/m8-3fg9ek.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzk_u8uvf"/><path class="hcys5pimr"/><path class="cltfdlb1g"/><path class="m8-3fg9ek"/>`,
		"fallback": "material-icon-theme:rspec",
	});
}

export default Component;
