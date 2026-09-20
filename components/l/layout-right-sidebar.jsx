import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qxgp30ily.css';
import '../../css/z/zoo19mzfi.css';
import '../../css/r/rg-j--brg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="qxgp30ily"/><path class="zoo19mzfi"/><path class="rg-j--brg"/></g>`,
		"fallback": "streamline-plump-color:layout-right-sidebar",
	});
}

export default Component;
