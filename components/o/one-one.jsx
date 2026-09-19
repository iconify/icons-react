import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et9p9tbwl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGah4dgkLO"><path class="et9p9tbwl"/></mask></defs><path mask="url(#SVGah4dgkLO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:one-one",
	});
}

export default Component;
