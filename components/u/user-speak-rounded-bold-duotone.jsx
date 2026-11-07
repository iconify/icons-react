import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om7lkbccu.css';
import '../../css/k/kw8vl3bjo.css';
import '../../css/s/smbj7_bwx.css';
import '../../css/l/lq3vbfrsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om7lkbccu"/><path class="kw8vl3bjo"/><path class="smbj7_bwx"/><ellipse class="lq3vbfrsv"/>`,
		"fallback": "solar:user-speak-rounded-bold-duotone",
	});
}

export default Component;
