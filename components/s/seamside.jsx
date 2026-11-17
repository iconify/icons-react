import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4yn72lps.css';
import '../../css/r/rqws4-_6e.css';
import '../../css/r/r2w6hntqn.css';
import '../../css/z/zg90dh62t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4yn72lps"/><path class="rqws4-_6e"/><path class="r2w6hntqn"/><path class="zg90dh62t"/>`,
		"fallback": "selfhst:seamside",
	});
}

export default Component;
