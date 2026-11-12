import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggvn7iwto.css';
import '../../css/x/x5x2_1b7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ggvn7iwto"/><path class="x5x2_1b7b"/>`,
		"fallback": "selfhst:openuem-dark",
	});
}

export default Component;
