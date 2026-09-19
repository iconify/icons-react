import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/i1yn_n3se.css';
import '../../css/s/sr2ovzbeo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMMH8wrHj"><g class="aql7dnt-u"><path class="i1yn_n3se"/><path class="sr2ovzbeo"/></g></mask></defs><path mask="url(#SVGMMH8wrHj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:video-conference",
	});
}

export default Component;
