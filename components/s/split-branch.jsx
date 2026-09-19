import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyy3lhbvu.css';
import '../../css/e/erw2gbc2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eyy3lhbvu"/><path class="erw2gbc2w"/></g>`,
		"fallback": "icon-park-outline:split-branch",
	});
}

export default Component;
