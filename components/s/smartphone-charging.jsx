import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7pk7yb5z.css';
import '../../css/f/f2wz75fhv.css';
import '../../css/o/ofbe-ohgo.css';
import '../../css/e/erh8x-plt.css';
import '../../css/o/ovdgnkbfv.css';
import '../../css/q/q6febrc9g.css';
import '../../css/h/h5p27fw5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o7pk7yb5z wm-k"/><path class="f2wz75fhv wm-s"/><path class="ofbe-ohgo wm-deco"/><path class="erh8x-plt wm-k"/><path class="ovdgnkbfv wm-k"/><path class="q6febrc9g wm-s"/><path class="h5p27fw5z wm-shadow"/></g>`,
		"fallback": "withicons-valentine:smartphone-charging",
	});
}

export default Component;
