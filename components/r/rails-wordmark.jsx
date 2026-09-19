import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze3tw4bhu.css';
import '../../css/i/ikfvhgbtv.css';
import '../../css/t/tl-xxku-t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze3tw4bhu"/><path class="ikfvhgbtv"/><path class="tl-xxku-t"/>`,
		"fallback": "devicon-plain:rails-wordmark",
	});
}

export default Component;
