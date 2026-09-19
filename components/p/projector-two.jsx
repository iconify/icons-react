import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lzcyy-hlv.css';
import '../../css/e/edfg9vbrl.css';
import '../../css/w/wfrx6abev.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2i6VodwG"><g class="rohhhzb0l"><path class="lzcyy-hlv"/><path class="edfg9vbrl"/><circle class="wfrx6abev"/></g></mask></defs><path mask="url(#SVG2i6VodwG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:projector-two",
	});
}

export default Component;
