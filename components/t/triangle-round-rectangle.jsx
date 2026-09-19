import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/w/wfgblghof.css';
import '../../css/j/jz_ctggda.css';
import '../../css/t/ttkz8cc9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="wfgblghof"/><path class="jz_ctggda"/><path class="ttkz8cc9i"/></g>`,
		"fallback": "icon-park:triangle-round-rectangle",
	});
}

export default Component;
