import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u-60abcxg.css';
import '../../css/s/s_6tm9pjp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRv7X7dKS"><g class="aql7dnt-u"><path class="u-60abcxg"/><path class="s_6tm9pjp"/></g></mask></defs><path mask="url(#SVGRv7X7dKS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:power-supply",
	});
}

export default Component;
