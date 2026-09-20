import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtx7r_b3k.css';
import '../../css/l/ln1vkxyeu.css';
import '../../css/k/knqmx4bzv.css';
import '../../css/t/th2rkvb_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtx7r_b3k"/><path class="ln1vkxyeu"/><path class="knqmx4bzv"/><path class="th2rkvb_l"/>`,
		"fallback": "selfhst:timeful-dark",
	});
}

export default Component;
