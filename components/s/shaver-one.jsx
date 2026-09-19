import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yhw77yb8y.css';
import '../../css/g/gwrmm3xbs.css';
import '../../css/f/ft6udiq_a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIGq8LeRj"><g class="aql7dnt-u"><path class="yhw77yb8y"/><path class="gwrmm3xbs"/><circle class="ft6udiq_a"/></g></mask></defs><path mask="url(#SVGIGq8LeRj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shaver-one",
	});
}

export default Component;
