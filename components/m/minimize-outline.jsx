import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l31d8cc7e.css';
import '../../css/i/ijd6lr-_h.css';
import '../../css/i/iow7mib_a.css';
import '../../css/z/zqa37zcin.css';
import '../../css/f/fn8xm-7gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l31d8cc7e"/><path clip-rule="evenodd" class="ijd6lr-_h"/><path clip-rule="evenodd" class="iow7mib_a"/><path clip-rule="evenodd" class="zqa37zcin"/><path clip-rule="evenodd" class="fn8xm-7gk"/>`,
		"fallback": "cuida:minimize-outline",
	});
}

export default Component;
