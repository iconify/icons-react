import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh4b1qbqb.css';
import '../../css/n/ncb41obml.css';
import '../../css/v/vsys1sbsv.css';
import '../../css/x/xkeupocbm.css';
import '../../css/i/iyk1-sbvz.css';
import '../../css/c/cgwd3ibqx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh4b1qbqb"/><path class="ncb41obml"/><path class="vsys1sbsv"/><path class="xkeupocbm"/><path class="iyk1-sbvz"/><path class="cgwd3ibqx"/></g>`,
		"fallback": "streamline-flex-color:pen-tool",
	});
}

export default Component;
