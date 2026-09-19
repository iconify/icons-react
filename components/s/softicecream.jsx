import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9wlk_bia.css';
import '../../css/m/mnoez5byt.css';
import '../../css/s/s30ds6b3n.css';
import '../../css/b/bsib84i4l.css';
import '../../css/l/l7xcnxbzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9wlk_bia"/><path class="mnoez5byt"/><path class="s30ds6b3n"/><path class="bsib84i4l"/><path class="l7xcnxbzp"/>`,
		"fallback": "fxemoji:softicecream",
	});
}

export default Component;
