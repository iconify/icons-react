import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0u6p4b4f.css';
import '../../css/p/pwhl4tsws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0u6p4b4f"/><path class="pwhl4tsws"/>`,
		"fallback": "streamline-ultimate:tags-favorite-bold",
	});
}

export default Component;
