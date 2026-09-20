import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh0hqhbvq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uh0hqhbvq"/>`,
		"fallback": "streamline-plump:smiley-sparks-remix",
	});
}

export default Component;
