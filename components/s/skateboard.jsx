import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_y26382c.css';
import '../../css/d/dhi_ht-9o.css';
import '../../css/x/xud0o8o1f.css';
import '../../css/u/udd3bbc2x.css';
import '../../css/d/dv9hf9zlc.css';
import '../../css/m/m1xxer0fr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s_y26382c"/><circle class="dhi_ht-9o"/><path class="xud0o8o1f"/><g class="udd3bbc2x"><circle class="s_y26382c"/><circle class="dhi_ht-9o"/></g><path class="dv9hf9zlc"/><path class="m1xxer0fr"/>`,
		"fallback": "openmoji:skateboard",
	});
}

export default Component;
