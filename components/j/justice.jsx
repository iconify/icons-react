import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf3a7wbyl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sf3a7wbyl"/>`,
		"fallback": "healthicons:justice",
	});
}

export default Component;
