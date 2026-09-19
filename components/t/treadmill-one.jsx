import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx30rb9t.css';
import '../../css/f/fezu9jvay.css';
import '../../css/a/a4tcz4b4u.css';
import '../../css/u/ukcu5rbys.css';
import '../../css/w/wefwctbsn.css';
import '../../css/b/bsvsyqvtx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="btx30rb9t"><path class="fezu9jvay"/><path class="a4tcz4b4u"/><path class="ukcu5rbys"/><path class="wefwctbsn"/><path class="bsvsyqvtx"/></g>`,
		"fallback": "icon-park:treadmill-one",
	});
}

export default Component;
