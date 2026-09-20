import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v43t1cc2f.css';
import '../../css/e/e732iojjz.css';
import '../../css/d/dgoi6hbuc.css';
import '../../css/z/z1txbmbju.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v43t1cc2f"/><path class="e732iojjz"/><path class="dgoi6hbuc"/><path class="z1txbmbju"/></g>`,
		"fallback": "streamline-color:office-building-1",
	});
}

export default Component;
