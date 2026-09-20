import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm6gpacbl.css';
import '../../css/r/r1x8h9t3p.css';
import '../../css/z/zg089ff_d.css';
import '../../css/r/r70b2ojmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xm6gpacbl"/><path class="r1x8h9t3p"/><path clip-rule="evenodd" class="zg089ff_d"/><path class="r70b2ojmk"/>`,
		"fallback": "token:nvt",
	});
}

export default Component;
