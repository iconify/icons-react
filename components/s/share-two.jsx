import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl-9f5bep.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAMeIHcAT"><path class="sl-9f5bep"/></mask></defs><path mask="url(#SVGAMeIHcAT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:share-two",
	});
}

export default Component;
