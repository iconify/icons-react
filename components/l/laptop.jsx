import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/e3kdk1ggj.css';
import '../../css/u/u29hakb-d.css';
import '../../css/u/uvzjptbai.css';
import '../../css/w/wq5cvm5qq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="e3kdk1ggj"/><path class="u29hakb-d"/><path class="uvzjptbai"/><path class="wq5cvm5qq"/></g>`,
		"fallback": "streamline-plump-color:laptop",
	});
}

export default Component;
