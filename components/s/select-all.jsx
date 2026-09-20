import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ijzbaybvc.css';
import '../../css/k/kvzsp0brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ijzbaybvc"/><path class="kvzsp0brl"/></g>`,
		"fallback": "streamline-sharp-color:select-all",
	});
}

export default Component;
