import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nw1o6hbup.css';
import '../../css/r/rtc2vebam.css';
import '../../css/q/qw0rhm64r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nw1o6hbup"/><path class="rtc2vebam"/><circle class="qw0rhm64r"/></g>`,
		"fallback": "lucide:telescope",
	});
}

export default Component;
