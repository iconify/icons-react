import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zoqhftbbw.css';
import '../../css/a/ac4w5bc3l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkmrbQeMA"><g class="rohhhzb0l"><path class="zoqhftbbw"/><path class="ac4w5bc3l"/></g></mask></defs><path mask="url(#SVGkmrbQeMA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:notepad",
	});
}

export default Component;
