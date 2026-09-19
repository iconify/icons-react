import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyto8pb-r.css';
import '../../css/q/qq9jsubwp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyto8pb-r"/><path class="qq9jsubwp"/>`,
		"fallback": "carbon:port-input",
	});
}

export default Component;
