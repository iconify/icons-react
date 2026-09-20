import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osaojrbhq.css';
import '../../css/k/k8dl_z2ek.css';
import '../../css/o/o9tkm69yu.css';
import '../../css/b/beqndpwid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osaojrbhq"/><path class="k8dl_z2ek"/><path class="o9tkm69yu"/><path class="beqndpwid"/>`,
		"fallback": "selfhst:nodemailer",
	});
}

export default Component;
