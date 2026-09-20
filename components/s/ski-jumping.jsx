import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emfpa0b7n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emfpa0b7n"/>`,
		"fallback": "temaki:ski-jumping",
	});
}

export default Component;
