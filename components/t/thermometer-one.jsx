import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv8q85bdl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsOJTOejQ"><path class="jv8q85bdl"/></mask></defs><path mask="url(#SVGsOJTOejQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thermometer-one",
	});
}

export default Component;
