import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbyvp82fn.css';
import '../../css/g/gd20kcnne.css';
import '../../css/a/aekryg-vf.css';
import '../../css/j/jp0tsubkg.css';
import '../../css/b/begrr9tvc.css';
import '../../css/m/m4q6e1b9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cbyvp82fn"/><path class="gd20kcnne"/><linearGradient id="SVG01yB2c5K" x1="49.592" x2="464.118" y1="618.348" y2="203.822" gradientTransform="matrix(1 0 0 -1 0 667.89)" gradientUnits="userSpaceOnUse"><stop offset=".004" class="aekryg-vf"/><stop offset=".039" class="jp0tsubkg"/><stop offset=".9" class="begrr9tvc"/></linearGradient><path fill="url(#SVG01yB2c5K)" class="m4q6e1b9h"/>`,
		"fallback": "selfhst:openziti",
	});
}

export default Component;
