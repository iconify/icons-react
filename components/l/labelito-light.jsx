import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvyedwt0y.css';
import '../../css/f/fep52olyi.css';
import '../../css/e/ezl-f-c_l.css';
import '../../css/l/l8ejz0bie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvyedwt0y"/><path class="fep52olyi"/><path class="ezl-f-c_l"/><path class="l8ejz0bie"/>`,
		"fallback": "selfhst:labelito-light",
	});
}

export default Component;
