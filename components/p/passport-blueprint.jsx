import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/drg7l01fx.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/m/mv85hfbyp.css';
import '../../css/f/fnudiubft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="drg7l01fx wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="mv85hfbyp wm-k"/><path class="fnudiubft wm-a"/></g>`,
		"fallback": "withicons:passport-blueprint",
	});
}

export default Component;
