import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spgkc6byu.css';
import '../../css/l/l_cigjbby.css';
import '../../css/r/re5azabqi.css';
import '../../css/c/cp59p6b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spgkc6byu"/><path class="l_cigjbby"/><path class="re5azabqi"/><path class="cp59p6b7j"/></g>`,
		"fallback": "streamline-ultimate-color:shop-sign-open",
	});
}

export default Component;
