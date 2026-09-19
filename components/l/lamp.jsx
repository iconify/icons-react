import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iirreabjs.css';
import '../../css/z/zuxintbbc.css';
import '../../css/u/ux16ifpyr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7OE4eeoM"><g class="rohhhzb0l"><path class="iirreabjs"/><path class="zuxintbbc"/><path class="ux16ifpyr"/></g></mask></defs><path mask="url(#SVG7OE4eeoM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lamp",
	});
}

export default Component;
