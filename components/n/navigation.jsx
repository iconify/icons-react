import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svjkzmbvm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDCDRabPH"><path class="svjkzmbvm"/></mask></defs><path mask="url(#SVGDCDRabPH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:navigation",
	});
}

export default Component;
