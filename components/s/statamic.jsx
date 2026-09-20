import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2686umpn.css';
import '../../css/v/v4ezc_mia.css';
import '../../css/y/ycs9ylboy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2686umpn"/><path class="v4ezc_mia"/><path class="ycs9ylboy"/>`,
		"fallback": "selfhst:statamic",
	});
}

export default Component;
