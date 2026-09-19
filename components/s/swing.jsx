import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z6zqwox-c.css';
import '../../css/d/dfuqjjkyx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3dTQs9Rq"><g class="aql7dnt-u"><path class="z6zqwox-c"/><path class="dfuqjjkyx"/></g></mask></defs><path mask="url(#SVG3dTQs9Rq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:swing",
	});
}

export default Component;
