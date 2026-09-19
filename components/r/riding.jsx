import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/n0j-dwb2s.css';
import '../../css/x/xcl2xpzvj.css';
import '../../css/g/gts74d00t.css';
import '../../css/u/ungdummsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="n0j-dwb2s"/><path class="xcl2xpzvj"/><circle class="gts74d00t"/><circle class="ungdummsg"/></g>`,
		"fallback": "icon-park-solid:riding",
	});
}

export default Component;
