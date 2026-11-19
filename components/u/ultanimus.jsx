import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2n198b7o.css';
import '../../css/x/xeh2z5bsr.css';

const viewBox = {"width":18,"height":20,"left":3,"top":2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2n198b7o"/><circle class="xeh2z5bsr"/>`,
		"fallback": "thesvg:ultanimus",
	});
}

export default Component;
