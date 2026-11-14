import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gswcn55nx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xdkvnmb1e.css';
import '../../css/f/ffehcej0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gswcn55nx"/><g class="mc2zb0bvp"><path class="xdkvnmb1e"/><path class="ffehcej0l"/></g></g>`,
		"fallback": "struq:trend",
	});
}

export default Component;
