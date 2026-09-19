import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/s97k9jbuz.css';
import '../../css/f/f494clbor.css';
import '../../css/z/zavgbblcj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHffbrdPP"><g class="rohhhzb0l"><path class="s97k9jbuz"/><path class="f494clbor"/><circle class="zavgbblcj"/></g></mask></defs><path mask="url(#SVGHffbrdPP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shoulder-bag",
	});
}

export default Component;
