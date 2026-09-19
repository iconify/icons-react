import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/w812kkozp.css';
import '../../css/d/d1ny5kbfu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUV14vb0V"><g class="aql7dnt-u"><path class="w812kkozp"/><path class="d1ny5kbfu"/></g></mask></defs><path mask="url(#SVGUV14vb0V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pay-code-one",
	});
}

export default Component;
