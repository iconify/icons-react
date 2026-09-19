import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7mgyobwh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVVTypbHn"><path class="f7mgyobwh"/></mask></defs><path mask="url(#SVGVVTypbHn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:play-one",
	});
}

export default Component;
