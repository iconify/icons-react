import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afeo2fbqa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI4v0Oc9U"><path class="afeo2fbqa"/></mask></defs><path mask="url(#SVGI4v0Oc9U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:square",
	});
}

export default Component;
