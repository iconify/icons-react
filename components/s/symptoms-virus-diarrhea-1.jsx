import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dv3pvwgew.css';
import '../../css/p/p3x9tjbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dv3pvwgew"/><path class="p3x9tjbzm"/></g>`,
		"fallback": "covid:symptoms-virus-diarrhea-1",
	});
}

export default Component;
