import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/w9hvr_bys.css';
import '../../css/y/yyt_2ob4m.css';
import '../../css/a/abnqwbbcj.css';
import '../../css/f/fv__vyeld.css';
import '../../css/k/k9rtv2gam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="w9hvr_bys"/><path class="yyt_2ob4m"/><path class="abnqwbbcj"/><path class="fv__vyeld"/><path class="k9rtv2gam"/></g>`,
		"fallback": "streamline-sharp-color:strategy-tasks",
	});
}

export default Component;
