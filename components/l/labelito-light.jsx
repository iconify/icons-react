import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvyedwt0y.css';
import '../../css/a/ac0j8jqxa.css';
import '../../css/u/ucl9nybgr.css';
import '../../css/r/rsq9iwbuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvyedwt0y"/><path class="ac0j8jqxa"/><path class="ucl9nybgr"/><path class="rsq9iwbuw"/>`,
		"fallback": "selfhst:labelito-light",
	});
}

export default Component;
