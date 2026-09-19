import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha1kkmb1c.css';
import '../../css/s/svdi4hd7i.css';
import '../../css/h/h9ku_5-7e.css';
import '../../css/f/f6ry3nbeq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2qMKLc9C"><g class="ft5dv1b6b"><path class="ha1kkmb1c"/><path class="svdi4hd7i"/><path clip-rule="evenodd" class="h9ku_5-7e"/><path class="f6ry3nbeq"/></g></mask></defs><path mask="url(#SVG2qMKLc9C)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:virtual-reality-glasses",
	});
}

export default Component;
