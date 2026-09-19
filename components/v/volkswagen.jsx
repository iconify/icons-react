import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/r/rer8mf95d.css';
import '../../css/m/mdurccb4e.css';
import '../../css/b/b6vpmabbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vkcj4bcdm"/><path class="rer8mf95d"/><path class="mdurccb4e"/><path class="b6vpmabbz"/></g>`,
		"fallback": "icon-park-outline:volkswagen",
	});
}

export default Component;
