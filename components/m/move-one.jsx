import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6gxxwbzy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3aodzdrj"><path class="v6gxxwbzy"/></mask></defs><path mask="url(#SVG3aodzdrj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:move-one",
	});
}

export default Component;
