import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qni966bju.css';
import '../../css/c/c96bn9bfp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDAWLkdts"><g class="aql7dnt-u"><circle class="qni966bju"/><path class="c96bn9bfp"/></g></mask></defs><path mask="url(#SVGDAWLkdts)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:user-positioning",
	});
}

export default Component;
