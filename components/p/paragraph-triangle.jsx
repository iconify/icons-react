import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/e/esjhpdwoh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgrheV0qn"><g class="aql7dnt-u"><path class="k-t__0bsb"/><path class="esjhpdwoh"/></g></mask></defs><path mask="url(#SVGgrheV0qn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:paragraph-triangle",
	});
}

export default Component;
