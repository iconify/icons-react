import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qs6hszyma.css';
import '../../css/b/b8nviyb0p.css';
import '../../css/o/osuz1epzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qs6hszyma"/><path class="b8nviyb0p"/><path class="osuz1epzg"/></g>`,
		"fallback": "iconoir:shuffle",
	});
}

export default Component;
