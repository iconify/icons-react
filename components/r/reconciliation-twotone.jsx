import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlv0u0bzu.css';
import '../../css/w/wyuz1vbhu.css';
import '../../css/y/ynjpy6sjz.css';
import '../../css/m/mil8c4_7q.css';
import '../../css/o/oiypdpdrq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlv0u0bzu"/><path class="wyuz1vbhu"/><path class="ynjpy6sjz"/><path class="mil8c4_7q"/><path class="oiypdpdrq"/>`,
		"fallback": "ant-design:reconciliation-twotone",
	});
}

export default Component;
