import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afeo2fbqa.css';
import '../../css/z/zu2drkjtb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGdCBlela"><g class="ft5dv1b6b"><path class="afeo2fbqa"/><path class="zu2drkjtb"/></g></mask></defs><path mask="url(#SVGGdCBlela)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tumblr",
	});
}

export default Component;
