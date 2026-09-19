import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/u4ajsubal.css';
import '../../css/a/aouwyouvc.css';
import '../../css/f/f81lr3bmn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzZDDPcyC"><g class="rohhhzb0l"><rect class="u4ajsubal"/><circle class="aouwyouvc"/><path class="f81lr3bmn"/></g></mask></defs><path mask="url(#SVGzZDDPcyC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:radio",
	});
}

export default Component;
