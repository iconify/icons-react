import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmh3nbbvo.css';
import '../../css/a/anh5kmhkf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcNm2IbVG"><g class="ft5dv1b6b"><path class="vmh3nbbvo"/><path class="anh5kmhkf"/></g></mask></defs><path mask="url(#SVGcNm2IbVG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:road-cone",
	});
}

export default Component;
