import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5po5r.css';
import '../../css/n/njj14b.css';
import '../../css/y/ydovum.css';
import '../../css/z/zq9xpz.css';
import '../../css/s/so-from-34.css';
import '../../css/d/d-k6ve5o.css';
import '../../css/d/d-c-ymvb.css';
import '../../css/d/d-ap4uuv.css';
import '../../css/d/d-yv2e7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5po5r"/><path class="njj14b ydovum"/><path class="ydovum zq9xpz"/>`,
		"fallback": "line-md:volume-high",
	});
}

export default Component;
