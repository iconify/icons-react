import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xauqnxols.css';
import '../../css/n/nm2lweb7o.css';
import '../../css/s/swrcwtb1z.css';
import '../../css/b/bogsmpsnl.css';
import '../../css/m/myhz4z0wa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xauqnxols"/><path class="nm2lweb7o"/><path class="swrcwtb1z"/><path class="bogsmpsnl"/><path class="myhz4z0wa"/>`,
		"fallback": "devicon:opentofu-wordmark",
	});
}

export default Component;
