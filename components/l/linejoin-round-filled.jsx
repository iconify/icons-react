import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb-9x3bjn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kb-9x3bjn"/>`,
		"fallback": "lsicon:linejoin-round-filled",
	});
}

export default Component;
