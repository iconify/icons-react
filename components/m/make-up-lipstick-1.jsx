import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bmdy_ibsv.css';
import '../../css/g/gbdaidb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bmdy_ibsv"/><path class="gbdaidb5m"/></g>`,
		"fallback": "streamline-ultimate:make-up-lipstick-1",
	});
}

export default Component;
