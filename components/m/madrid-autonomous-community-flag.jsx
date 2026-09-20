import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dokdgubsd.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/x/x544m-ffw.css';
import '../../css/c/c8ov0mbpt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dokdgubsd"/><g class="c-zrgpb5l"><path class="x544m-ffw"/><path class="c8ov0mbpt"/></g><path class="qy525jbwx"/>`,
		"fallback": "openmoji:madrid-autonomous-community-flag",
	});
}

export default Component;
