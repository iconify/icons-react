import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqx3-cbvw.css';
import '../../css/t/tbu-dnbhk.css';
import '../../css/v/vi7v816hp.css';
import '../../css/v/v60ok8_fu.css';
import '../../css/a/aitmbxqjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqx3-cbvw"/><path class="tbu-dnbhk"/><path class="vi7v816hp"/><path class="v60ok8_fu"/><path class="aitmbxqjr"/></g>`,
		"fallback": "streamline-cyber-color:shopping-basket-star",
	});
}

export default Component;
