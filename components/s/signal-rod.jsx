import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/ag3gp6mhp.css';
import '../../css/n/n07-27byw.css';
import '../../css/i/i4xctmb2r.css';
import '../../css/m/mgqg-pzmx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ag3gp6mhp"/><circle class="n07-27byw"/><path class="i4xctmb2r"/><path class="mgqg-pzmx"/></g>`,
		"fallback": "glyphs-poly:signal-rod",
	});
}

export default Component;
