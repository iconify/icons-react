import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac_q7z1tz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYs6MwejR"><path class="ac_q7z1tz"/></mask></defs><path mask="url(#SVGYs6MwejR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rectangle-one",
	});
}

export default Component;
