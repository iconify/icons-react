import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5l22r1br.css';
import '../../css/j/jsjj4vbkz.css';
import '../../css/b/baxhqnbgk.css';
import '../../css/p/ppetvt7ab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5l22r1br"/><path class="jsjj4vbkz"/><path class="baxhqnbgk"/><path class="ppetvt7ab"/>`,
		"fallback": "selfhst:oauth2-proxy",
	});
}

export default Component;
