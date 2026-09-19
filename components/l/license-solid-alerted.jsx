import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfdpv4-xg.css';
import '../../css/e/ebq16pjyq.css';
import '../../css/z/zk73kibzd.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted sfdpv4-xg"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted ebq16pjyq"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted zk73kibzd"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:license-solid-alerted",
	});
}

export default Component;
