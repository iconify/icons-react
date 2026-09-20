import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz_n6bbyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jz_n6bbyr"/>`,
		"fallback": "streamline-plump:nintendo-xbox-controller-1-remix",
	});
}

export default Component;
