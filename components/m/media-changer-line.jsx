import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qchdvmbcp.css';
import '../../css/c/cwo24bbfo.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qchdvmbcp"/><path class="cwo24bbfo"/>`,
		"fallback": "clarity:media-changer-line",
	});
}

export default Component;
