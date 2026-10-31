import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czlnr725f.css';
import '../../css/t/tv6ql-8sl.css';
import '../../css/w/wzr97iuji.css';
import '../../css/r/rx7-u4bhw.css';
import '../../css/l/l3w1sfbfa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="czlnr725f"/><path class="tv6ql-8sl"/><path class="wzr97iuji"/><path class="rx7-u4bhw"/><path class="l3w1sfbfa"/></g>`,
		"fallback": "streamline-kameleon-color:speaker-pop",
	});
}

export default Component;
