import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/naayrx7_t.css';
import '../../css/n/nnyeuib9r.css';
import '../../css/s/s0zjehfxn.css';
import '../../css/a/a0myg2b6y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRFv1Npxo"><g class="v3_i3wktz"><path class="naayrx7_t"/><path clip-rule="evenodd" class="nnyeuib9r"/><path class="s0zjehfxn"/><path class="a0myg2b6y"/></g></mask></defs><path mask="url(#SVGRFv1Npxo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tape",
	});
}

export default Component;
