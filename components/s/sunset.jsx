import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sy1nkmmcc.css';
import '../../css/p/phhmyrtui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="sy1nkmmcc"/><path class="phhmyrtui"/></g>`,
		"fallback": "streamline-plump-color:sunset",
	});
}

export default Component;
