import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zo7kwhb-r.css';
import '../../css/a/avz1rybom.css';
import '../../css/e/ehh3wwbgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="zo7kwhb-r"/><path class="avz1rybom"/><path class="ehh3wwbgj"/></g>`,
		"fallback": "icon-park-solid:medical-files",
	});
}

export default Component;
