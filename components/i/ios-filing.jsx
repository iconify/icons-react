import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw50q5sdt.css';
import '../../css/t/tcsakibxe.css';
import '../../css/x/xoc373bcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw50q5sdt"/><path class="tcsakibxe"/><path class="xoc373bcy"/>`,
		"fallback": "ion:ios-filing",
	});
}

export default Component;
