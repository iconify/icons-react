import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvqm_db9h.css';
import '../../css/h/hd2zslizq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvqm_db9h"/><path class="hd2zslizq"/>`,
		"fallback": "fxemoji:openfilefolder",
	});
}

export default Component;
