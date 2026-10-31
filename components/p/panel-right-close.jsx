import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6kuu8bqa.css';
import '../../css/e/ew-iv5blf.css';
import '../../css/t/t0qjhq4fu.css';
import '../../css/o/os2k2kw7y.css';
import '../../css/m/m0pwhbb5k.css';
import '../../css/p/pf6ptbcyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6kuu8bqa wm-k"/><path class="ew-iv5blf wm-a"/><path class="t0qjhq4fu wm-k"/><path class="os2k2kw7y wm-a"/><path class="m0pwhbb5k wm-shadow"/><path class="pf6ptbcyz wm-shine"/></g>`,
		"fallback": "withicons-valentine:panel-right-close",
	});
}

export default Component;
