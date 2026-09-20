import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht92wqnrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ht92wqnrp"/>`,
		"fallback": "streamline-plump:recording-tape-1-remix",
	});
}

export default Component;
