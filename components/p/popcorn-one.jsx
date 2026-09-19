import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q_xrnyxsg.css';
import '../../css/o/oxc3ynbjv.css';
import '../../css/c/c2yr0367r.css';
import '../../css/i/i8g5t7d9p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyA5ZSbRA"><g class="wwvp95byt"><path class="q_xrnyxsg"/><path class="oxc3ynbjv"/><path class="c2yr0367r"/><path class="i8g5t7d9p"/></g></mask></defs><path mask="url(#SVGyA5ZSbRA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:popcorn-one",
	});
}

export default Component;
