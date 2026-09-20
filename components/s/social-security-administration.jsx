import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6hwvs4-a.css';
import '../../css/o/ot8j7rzge.css';
import '../../css/s/sqlj-pbbq.css';
import '../../css/k/k9uzu3g8b.css';
import '../../css/c/ciu5c_bvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6hwvs4-a"/><path clip-rule="evenodd" class="ot8j7rzge"/><path class="sqlj-pbbq"/><path clip-rule="evenodd" class="k9uzu3g8b"/><path class="ciu5c_bvu"/>`,
		"fallback": "selfhst:social-security-administration",
	});
}

export default Component;
