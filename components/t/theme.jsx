import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxs2uuwtx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpdd17cBw"><path class="fxs2uuwtx"/></mask></defs><path mask="url(#SVGpdd17cBw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:theme",
	});
}

export default Component;
