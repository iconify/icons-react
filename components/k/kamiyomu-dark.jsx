import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgcf6i6wr.css';
import '../../css/y/yhd0eaczw.css';
import '../../css/w/wcc2lm_1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgcf6i6wr"/><path class="yhd0eaczw"/><path class="wcc2lm_1k"/>`,
		"fallback": "selfhst:kamiyomu-dark",
	});
}

export default Component;
