import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c995k36nr.css';
import '../../css/i/iz24vsbxs.css';
import '../../css/k/kpgvotblb.css';
import '../../css/v/v6yzk-b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c995k36nr wm-k"/><path class="iz24vsbxs wm-shadow"/><path class="kpgvotblb wm-k"/><path class="v6yzk-b5c wm-a"/></g>`,
		"fallback": "withicons:toolbox-engrave",
	});
}

export default Component;
