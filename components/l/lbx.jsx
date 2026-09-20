import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez0v5nbco.css';
import '../../css/f/fnvhz6b_d.css';
import '../../css/r/r20ki5l4i.css';
import '../../css/w/w4w5jo-zd.css';
import '../../css/h/h3ackybvf.css';
import '../../css/c/cet2asbpe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez0v5nbco"/><path class="fnvhz6b_d"/><path class="r20ki5l4i"/><path class="w4w5jo-zd"/><path class="h3ackybvf"/><path class="cet2asbpe"/>`,
		"fallback": "material-icon-theme:lbx",
	});
}

export default Component;
