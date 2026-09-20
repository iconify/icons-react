import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt0k57bfd.css';
import '../../css/s/si1143bzw.css';
import '../../css/v/vs71ghb9p.css';
import '../../css/o/oud3bnr7u.css';
import '../../css/i/ijr8j1bui.css';
import '../../css/n/nn3fxib9y.css';
import '../../css/o/oi3gcbbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt0k57bfd"/><path class="si1143bzw"/><path class="vs71ghb9p"/><path clip-rule="evenodd" class="oud3bnr7u"/><path class="ijr8j1bui"/><path class="nn3fxib9y"/><path clip-rule="evenodd" class="oi3gcbbul"/>`,
		"fallback": "token:ort",
	});
}

export default Component;
