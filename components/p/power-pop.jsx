import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/x/xihjwnk6c.css';
import '../../css/h/h5xs2mkpb.css';
import '../../css/w/w0lmbq-oh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="xihjwnk6c"/><path class="h5xs2mkpb"/><path class="w0lmbq-oh"/></g>`,
		"fallback": "streamline-kameleon-color:power-pop",
	});
}

export default Component;
