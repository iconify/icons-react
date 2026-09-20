import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qpocn1vvu.css';
import '../../css/g/gn42k5bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qpocn1vvu"/><path class="gn42k5bkv"/></g>`,
		"fallback": "reicon:mobile3",
	});
}

export default Component;
