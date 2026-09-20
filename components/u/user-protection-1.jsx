import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cokktv9sg.css';
import '../../css/x/x_dtjmbrt.css';
import '../../css/q/q_gh9i-vp.css';
import '../../css/k/k7ufncbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cokktv9sg"/><path class="x_dtjmbrt"/><path class="q_gh9i-vp"/><path class="k7ufncbme"/></g>`,
		"fallback": "streamline-sharp-color:user-protection-1",
	});
}

export default Component;
