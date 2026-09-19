import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/blsw_3epl.css';
import '../../css/z/zup3dj9lq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzHjhsdUT"><g class="aql7dnt-u"><path class="blsw_3epl"/><path class="zup3dj9lq"/></g></mask></defs><path mask="url(#SVGzHjhsdUT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sippy-cup",
	});
}

export default Component;
