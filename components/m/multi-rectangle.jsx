import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xlsrtdl7a.css';
import '../../css/l/lgw4mrbtj.css';
import '../../css/r/r7asffbhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="xlsrtdl7a"/><path class="lgw4mrbtj"/><path class="r7asffbhh"/></g>`,
		"fallback": "icon-park:multi-rectangle",
	});
}

export default Component;
