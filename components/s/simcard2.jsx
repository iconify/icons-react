import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-zy8sb0i.css';
import '../../css/n/njwzch_ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s-zy8sb0i"/><path class="njwzch_ms"/></g>`,
		"fallback": "reicon:simcard2",
	});
}

export default Component;
