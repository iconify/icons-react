import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s9yau7bfv.css';
import '../../css/a/aiajx7ljo.css';
import '../../css/v/vh49_8btg.css';
import '../../css/r/rle50jbed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="s9yau7bfv"/><path class="aiajx7ljo"/><path class="vh49_8btg"/><path class="rle50jbed"/></g>`,
		"fallback": "icon-park-solid:stock-market",
	});
}

export default Component;
