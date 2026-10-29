import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp6ze3bac.css';
import '../../css/h/h-gnu7brs.css';
import '../../css/u/uh-othbsr.css';
import '../../css/u/uilal2b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp6ze3bac wm-k"/><path class="h-gnu7brs wm-a"/><path class="uh-othbsr wm-k"/><path class="uilal2b1e wm-a"/>`,
		"fallback": "withicons-bauhaus:maximize",
	});
}

export default Component;
