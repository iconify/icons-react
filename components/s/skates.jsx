import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e6b2l1b0w.css';
import '../../css/v/v47qmgbpf.css';
import '../../css/c/c_zwkzr4c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGo8p6gdyZ"><g class="aql7dnt-u"><path class="e6b2l1b0w"/><path class="v47qmgbpf"/><path class="c_zwkzr4c"/></g></mask></defs><path mask="url(#SVGo8p6gdyZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:skates",
	});
}

export default Component;
