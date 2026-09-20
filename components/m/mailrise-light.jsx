import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re3lufbbf.css';
import '../../css/j/jh93d6jmw.css';
import '../../css/l/lq0ayphzc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re3lufbbf"/><path class="jh93d6jmw"/><path class="lq0ayphzc"/>`,
		"fallback": "selfhst:mailrise-light",
	});
}

export default Component;
