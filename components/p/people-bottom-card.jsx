import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o8x38jbfa.css';
import '../../css/w/wby2aacyu.css';
import '../../css/c/czqpd_v7c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjWfJybeB"><g class="aql7dnt-u"><path class="o8x38jbfa"/><circle class="wby2aacyu"/><path class="czqpd_v7c"/></g></mask></defs><path mask="url(#SVGjWfJybeB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-bottom-card",
	});
}

export default Component;
