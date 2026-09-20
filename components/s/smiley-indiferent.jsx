import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/y/yjsjycc6p.css';
import '../../css/h/hzmcupege.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="yjsjycc6p"/><path class="hzmcupege"/></g>`,
		"fallback": "streamline-plump-color:smiley-indiferent",
	});
}

export default Component;
