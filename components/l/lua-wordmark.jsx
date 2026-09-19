import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww-xcxiwj.css';
import '../../css/g/gdczw0sve.css';
import '../../css/f/f1vttpb1l.css';
import '../../css/y/y3owh01jo.css';
import '../../css/g/gpqn85sba.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww-xcxiwj"/><g class="gdczw0sve"><path class="f1vttpb1l"/><path class="y3owh01jo"/></g><path class="gpqn85sba"/>`,
		"fallback": "devicon:lua-wordmark",
	});
}

export default Component;
