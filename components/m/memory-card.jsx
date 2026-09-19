import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/t48pb7sst.css';
import '../../css/d/dl3heccpw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrPA0jb3Z"><g class="aql7dnt-u"><path class="t48pb7sst"/><path class="dl3heccpw"/></g></mask></defs><path mask="url(#SVGrPA0jb3Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:memory-card",
	});
}

export default Component;
