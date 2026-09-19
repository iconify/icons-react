import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/n0x7fpbok.css';
import '../../css/o/ocruyxbsi.css';
import '../../css/d/dtvtwg_gj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYO5OyeAT"><g class="aql7dnt-u"><rect class="n0x7fpbok"/><path class="ocruyxbsi"/><rect class="dtvtwg_gj"/></g></mask></defs><path mask="url(#SVGYO5OyeAT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:spoon",
	});
}

export default Component;
