import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu1xf2bcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gu1xf2bcm"/>`,
		"fallback": "streamline-plump:magnet-solid",
	});
}

export default Component;
