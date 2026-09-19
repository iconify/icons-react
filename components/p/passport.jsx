import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rn062sb4o.css';
import '../../css/b/b3wd55b4b.css';
import '../../css/y/yp7rfpwnl.css';
import '../../css/s/soka6eb5z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUUMHjcMI"><g class="aql7dnt-u"><path class="rn062sb4o"/><path class="b3wd55b4b"/><circle class="yp7rfpwnl"/><path class="soka6eb5z"/></g></mask></defs><path mask="url(#SVGUUMHjcMI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:passport",
	});
}

export default Component;
