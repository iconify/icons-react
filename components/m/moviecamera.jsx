import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcpw2q4gb.css';
import '../../css/a/abq2l722c.css';
import '../../css/l/l10h6ebue.css';
import '../../css/v/vvlkjabbs.css';
import '../../css/m/myp7udbnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcpw2q4gb"/><path class="abq2l722c"/><path class="l10h6ebue"/><circle class="vvlkjabbs"/><path class="myp7udbnu"/>`,
		"fallback": "fxemoji:moviecamera",
	});
}

export default Component;
