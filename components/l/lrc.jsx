import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ytftarm9g.css';
import '../../css/s/sslehqmfk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ytftarm9g"/><path class="sslehqmfk"/></g>`,
		"fallback": "cryptocurrency-color:lrc",
	});
}

export default Component;
