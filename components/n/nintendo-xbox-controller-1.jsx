import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fym6f7rbw.css';
import '../../css/y/yov4iwbpc.css';
import '../../css/p/pljjx4b4c.css';
import '../../css/l/lylay1e2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="fym6f7rbw"/><path class="yov4iwbpc"/><path class="pljjx4b4c"/><path class="lylay1e2a"/></g>`,
		"fallback": "streamline-plump-color:nintendo-xbox-controller-1",
	});
}

export default Component;
