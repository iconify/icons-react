import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yhijrzbpl.css';
import '../../css/n/ntpl6vmcs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNAT4GFHK"><g class="aql7dnt-u"><path class="yhijrzbpl"/><path class="ntpl6vmcs"/></g></mask></defs><path mask="url(#SVGNAT4GFHK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pull-door",
	});
}

export default Component;
