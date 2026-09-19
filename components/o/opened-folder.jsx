import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7g52cc-s.css';
import '../../css/p/pftszrbvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7g52cc-s"/><path class="pftszrbvw"/>`,
		"fallback": "flat-color-icons:opened-folder",
	});
}

export default Component;
