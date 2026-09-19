import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f43n_498d.css';
import '../../css/r/r_yzpyu7i.css';
import '../../css/u/u9-gi0b-r.css';
import '../../css/i/i2snpo6py.css';
import '../../css/x/xl3huwb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f43n_498d"/><path class="r_yzpyu7i"/><path class="u9-gi0b-r"/><path class="i2snpo6py"/><path class="xl3huwb-s"/>`,
		"fallback": "fxemoji:rooster",
	});
}

export default Component;
