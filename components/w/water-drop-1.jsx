import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hynpdia2h.css';
import '../../css/r/rg2n-lf7y.css';
import '../../css/v/v2945_brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hynpdia2h"/><path class="rg2n-lf7y"/><path class="v2945_brj"/></g>`,
		"fallback": "streamline-sharp-color:water-drop-1",
	});
}

export default Component;
