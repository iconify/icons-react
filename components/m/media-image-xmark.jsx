import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oyvj3vu2o.css';
import '../../css/o/oh_1-ibvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oyvj3vu2o"/><path class="oh_1-ibvf"/></g>`,
		"fallback": "iconoir:media-image-xmark",
	});
}

export default Component;
