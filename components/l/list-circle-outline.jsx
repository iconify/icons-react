import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scd922beo.css';
import '../../css/r/rsyv-4sjc.css';
import '../../css/a/aqo8lubpi.css';
import '../../css/x/x7qr8mbdd.css';
import '../../css/g/gp2g9ybnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scd922beo"/><path class="rsyv-4sjc"/><circle class="aqo8lubpi"/><circle class="x7qr8mbdd"/><circle class="gp2g9ybnh"/>`,
		"fallback": "ion:list-circle-outline",
	});
}

export default Component;
