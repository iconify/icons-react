import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/h/ha8c5xb3s.css';
import '../../css/y/ye1b94bts.css';
import '../../css/y/yscia7iil.css';
import '../../css/a/axdqi9bao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="ha8c5xb3s"/><path class="ye1b94bts"/><path class="yscia7iil"/><path class="axdqi9bao"/></g>`,
		"fallback": "icon-park:thin",
	});
}

export default Component;
