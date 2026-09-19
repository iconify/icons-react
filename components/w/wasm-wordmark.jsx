import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqpr9y_fs.css';
import '../../css/y/ytq_a7bwt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqpr9y_fs"/><path class="ytq_a7bwt"/>`,
		"fallback": "devicon:wasm-wordmark",
	});
}

export default Component;
