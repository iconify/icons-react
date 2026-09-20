import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd170tb4j.css';
import '../../css/x/xez906brx.css';
import '../../css/q/qtdg2bcei.css';
import '../../css/e/eua6i4aqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd170tb4j"/><path class="xez906brx"/><path class="qtdg2bcei"/><path class="eua6i4aqt"/>`,
		"fallback": "token:vex",
	});
}

export default Component;
