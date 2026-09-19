import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_j2mjbpq.css';
import '../../css/i/iiqksgb7d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGphGeOdXM"><g class="ft5dv1b6b"><path class="v_j2mjbpq"/><path class="iiqksgb7d"/></g></mask></defs><path mask="url(#SVGphGeOdXM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:split-branch",
	});
}

export default Component;
