import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-4__rbvv.css';
import '../../css/e/evf9bccau.css';
import '../../css/q/q8flogb3z.css';
import '../../css/a/avplhg1nh.css';
import '../../css/d/dgybpwc_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-4__rbvv wm-shadow"/><path class="evf9bccau wm-k"/><path class="q8flogb3z wm-k"/><path class="avplhg1nh wm-a"/><path class="dgybpwc_i wm-a"/>`,
		"fallback": "withicons-pastel:link-2",
	});
}

export default Component;
