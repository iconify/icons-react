import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evs_ze2wt.css';
import '../../css/r/rge2six-h.css';
import '../../css/y/ycgbuscwn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evs_ze2wt"/><path class="rge2six-h"/><path class="ycgbuscwn"/>`,
		"fallback": "devicon:spicedb",
	});
}

export default Component;
