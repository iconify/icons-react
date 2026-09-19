import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0ndb3slp.css';
import '../../css/v/vpm5wbcdy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0ndb3slp"/><path class="vpm5wbcdy"/>`,
		"fallback": "devicon:okta-wordmark",
	});
}

export default Component;
