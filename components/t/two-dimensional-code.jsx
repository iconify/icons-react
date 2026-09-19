import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nrqfhodij.css';
import '../../css/j/j8v342ebz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXsLnyctv"><g class="rohhhzb0l"><path class="nrqfhodij"/><path class="j8v342ebz"/></g></mask></defs><path mask="url(#SVGXsLnyctv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:two-dimensional-code",
	});
}

export default Component;
