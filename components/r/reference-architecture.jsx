import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzck_dcet.css';
import '../../css/h/hxm77oqrd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xzck_dcet"/><path class="hxm77oqrd"/>`,
		"fallback": "carbon:reference-architecture",
	});
}

export default Component;
