import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxd6qze7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxd6qze7a"/>`,
		"fallback": "octicon:vscode-48",
	});
}

export default Component;
