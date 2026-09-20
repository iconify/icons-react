import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe8ilbs_y.css';
import '../../css/i/i-jzrbbnk.css';
import '../../css/r/r0ixaf-0p.css';
import '../../css/t/t53xstb5k.css';

const viewBox = {"width":367.5,"height":45};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe8ilbs_y"/><path class="i-jzrbbnk"/><path class="r0ixaf-0p"/><path class="t53xstb5k"/>`,
		"fallback": "thesvg-color:productboard-light",
	});
}

export default Component;
