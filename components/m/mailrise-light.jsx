import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mshnxfvng.css';
import '../../css/j/jh93d6jmw.css';
import '../../css/n/ntjhm5bvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mshnxfvng"/><path class="jh93d6jmw"/><path class="ntjhm5bvt"/>`,
		"fallback": "selfhst:mailrise-light",
	});
}

export default Component;
