import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug7viwfag.css';
import '../../css/a/atf7rkfzt.css';
import '../../css/s/sntxj5r0a.css';
import '../../css/b/bvllc8w-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug7viwfag"/><path class="atf7rkfzt"/><circle class="sntxj5r0a"/><path class="bvllc8w-c"/>`,
		"fallback": "ion:mail-notification-outline",
	});
}

export default Component;
