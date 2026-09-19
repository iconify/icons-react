import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pjotv2p9i.css';
import '../../css/e/eg20czblp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="pjotv2p9i"/><path class="eg20czblp"/></g>`,
		"fallback": "icon-park-solid:surveillance-cameras-one",
	});
}

export default Component;
