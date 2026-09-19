import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cymxjyb3f.css';
import '../../css/w/wpbu29bzw.css';
import '../../css/y/y46majbrr.css';
import '../../css/a/a7htqlawj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="cymxjyb3f"/><path class="wpbu29bzw"/><path class="y46majbrr"/><path class="a7htqlawj"/></g>`,
		"fallback": "icon-park:respect",
	});
}

export default Component;
