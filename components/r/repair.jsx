import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c_r9ymrlo.css';
import '../../css/e/ee12-ya6f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtaGLabXy"><g class="aql7dnt-u"><path class="c_r9ymrlo"/><path class="ee12-ya6f"/></g></mask></defs><path mask="url(#SVGtaGLabXy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:repair",
	});
}

export default Component;
