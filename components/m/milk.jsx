import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/ogfviyruo.css';
import '../../css/f/fbzqu81tc.css';
import '../../css/u/uxvwnyblj.css';
import '../../css/j/jq9w99g-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ogfviyruo"/><path class="fbzqu81tc"/><path class="uxvwnyblj"/><path class="jq9w99g-x"/></g>`,
		"fallback": "streamline-sharp-color:milk",
	});
}

export default Component;
