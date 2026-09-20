import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/adnth8jra.css';
import '../../css/r/r7zasviux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="adnth8jra"/><path class="r7zasviux"/></g>`,
		"fallback": "streamline-ultimate:phone-actions-refresh",
	});
}

export default Component;
