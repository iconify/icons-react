import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyd_hm.css';
import '../../css/y/ydovum.css';
import '../../css/e/eu-ltz.css';
import '../../css/m/m5e-la.css';
import '../../css/o/o6uaeu.css';
import '../../css/i/iar8yg.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-d1si2b.css';
import '../../css/f/fade-6y6uho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyd_hm ydovum"/><path class="eu-ltz ydovum"/><path class="m5e-la ydovum"/><path class="o6uaeu ydovum"/><path class="iar8yg ydovum"/>`,
		"fallback": "line-md:moon-filled-loop",
	});
}

export default Component;
