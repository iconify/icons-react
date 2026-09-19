import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdc6qib3k.css';
import '../../css/s/selcwmelg.css';
import '../../css/e/eyv9yyw_l.css';
import '../../css/f/f_zhl5bzc.css';
import '../../css/z/z7zfk7b5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdc6qib3k"/><path class="selcwmelg"/><path class="eyv9yyw_l"/><path class="f_zhl5bzc"/><path class="z7zfk7b5g"/>`,
		"fallback": "fxemoji:redapple",
	});
}

export default Component;
