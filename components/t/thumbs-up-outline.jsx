import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppwiyuuhj.css';
import '../../css/g/gdr7v9b9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppwiyuuhj"/><path class="gdr7v9b9m"/>`,
		"fallback": "famicons:thumbs-up-outline",
	});
}

export default Component;
