import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl-eb8nlu.css';
import '../../css/l/l9u6gsyxp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl-eb8nlu"/><path class="l9u6gsyxp"/>`,
		"fallback": "energy-icons:note-48-bold",
	});
}

export default Component;
