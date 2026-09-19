import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/s9v3gsb7k.css';
import '../../css/x/xd7hlgbdq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtwAIUclL"><g class="aql7dnt-u"><path class="s9v3gsb7k"/><path class="xd7hlgbdq"/></g></mask></defs><path mask="url(#SVGtwAIUclL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pennant",
	});
}

export default Component;
