import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmwrbob4p.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmwrbob4p"/>`,
		"fallback": "wi:umbrella",
	});
}

export default Component;
