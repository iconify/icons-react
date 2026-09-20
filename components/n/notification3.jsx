import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/x/xhy88vwup.css';
import '../../css/y/ycei_eggs.css';
import '../../css/e/ekndu2biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="xhy88vwup"/><path class="ycei_eggs"/><path class="ekndu2biw"/></g>`,
		"fallback": "reicon:notification3",
	});
}

export default Component;
