import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqtjmi1pi.css';
import '../../css/a/ar9ls-kig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iqtjmi1pi"/><path class="ar9ls-kig"/></g>`,
		"fallback": "iconamoon:share-1-duotone",
	});
}

export default Component;
