import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fthgilgrb.css';
import '../../css/y/yhd0eaczw.css';
import '../../css/z/z8wtxdbjb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fthgilgrb"/><path class="yhd0eaczw"/><path class="z8wtxdbjb"/>`,
		"fallback": "selfhst:kamiyomu-dark",
	});
}

export default Component;
