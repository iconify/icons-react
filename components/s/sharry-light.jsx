import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2abgpbrf.css';
import '../../css/y/yoxjsh9xh.css';
import '../../css/b/b2ay1hace.css';
import '../../css/k/k-fjt7b_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2abgpbrf"/><path class="yoxjsh9xh"/><path class="b2ay1hace"/><path class="k-fjt7b_g"/>`,
		"fallback": "selfhst:sharry-light",
	});
}

export default Component;
