import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/beu9ed8lh.css';
import '../../css/k/ktbh9sb3d.css';
import '../../css/f/ft1jp-l6g.css';
import '../../css/a/a3je19_hn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="beu9ed8lh"/><circle class="ktbh9sb3d"/><path class="ft1jp-l6g"/><path class="a3je19_hn"/></g>`,
		"fallback": "icon-park-solid:remote-control",
	});
}

export default Component;
