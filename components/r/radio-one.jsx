import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mwjqgf-_o.css';
import '../../css/f/fi_moqbpl.css';
import '../../css/h/hqhjn6b0z.css';
import '../../css/i/i7_ys9b1d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgxsm2lNr"><g class="rohhhzb0l"><rect class="mwjqgf-_o"/><path class="fi_moqbpl"/><circle class="hqhjn6b0z"/><path class="i7_ys9b1d"/></g></mask></defs><path mask="url(#SVGgxsm2lNr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:radio-one",
	});
}

export default Component;
