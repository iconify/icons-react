import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl10uib_z.css';
import '../../css/m/md-hw5o0n.css';
import '../../css/i/ic5x_6btl.css';
import '../../css/j/jimwxrbhg.css';
import '../../css/u/ui99pgbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pl10uib_z wm-k"/><path class="md-hw5o0n wm-k"/><path class="ic5x_6btl wm-k"/><path class="jimwxrbhg wm-shine"/><path class="ui99pgbbf wm-a"/></g>`,
		"fallback": "withicons-anime:ruler",
	});
}

export default Component;
