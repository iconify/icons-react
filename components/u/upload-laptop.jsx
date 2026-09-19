import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ok3giiwjs.css';
import '../../css/m/mp3b3lb8i.css';
import '../../css/m/mtk09za2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ok3giiwjs"/><path class="mp3b3lb8i"/><path class="mtk09za2a"/></g>`,
		"fallback": "icon-park-outline:upload-laptop",
	});
}

export default Component;
