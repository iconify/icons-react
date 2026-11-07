import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elor6_bou.css';
import '../../css/o/ol5r4_bpd.css';
import '../../css/l/laaew57wa.css';
import '../../css/o/ov5-3rbxv.css';
import '../../css/a/a_-x04hkk.css';
import '../../css/l/lo2kz2b5c.css';
import '../../css/r/rtrsrablt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elor6_bou"/><path class="ol5r4_bpd"/><path class="laaew57wa"/><path clip-rule="evenodd" class="ov5-3rbxv"/><path clip-rule="evenodd" class="a_-x04hkk"/><path class="lo2kz2b5c"/><path class="rtrsrablt"/>`,
		"fallback": "solar:skateboarding-outline",
	});
}

export default Component;
