import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7z81dxke.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPEiF6cRJ"><path class="p7z81dxke"/></mask></defs><path mask="url(#SVGPEiF6cRJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:up-two",
	});
}

export default Component;
