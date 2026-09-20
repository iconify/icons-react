import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcj-5rgqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dcj-5rgqm"/>`,
		"fallback": "streamline-plump:medical-bag-remix",
	});
}

export default Component;
