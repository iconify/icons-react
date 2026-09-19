import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6z_s2t8r.css';
import '../../css/o/or07ipb2g.css';
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
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted l6z_s2t8r"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted or07ipb2g"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-3--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:user-solid-alerted",
	});
}

export default Component;
