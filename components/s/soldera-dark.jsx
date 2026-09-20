import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5np-7oxh.css';
import '../../css/w/wousxhbxy.css';
import '../../css/g/gzag1fbky.css';
import '../../css/r/r08d7pb2m.css';

const viewBox = {"width":328,"height":319};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5np-7oxh"/><path class="wousxhbxy"/><path class="gzag1fbky"/><path class="r08d7pb2m"/>`,
		"fallback": "thesvg-color:soldera-dark",
	});
}

export default Component;
