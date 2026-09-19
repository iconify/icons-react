import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtjjrsage.css';
import '../../css/l/lwmdjtqpi.css';
import '../../css/p/pda23471i.css';
import '../../css/n/nf2n-db8h.css';
import '../../css/o/oav8s0b-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTXxtdeJM"><g class="ft5dv1b6b"><path class="vtjjrsage"/><path clip-rule="evenodd" class="lwmdjtqpi"/><path class="pda23471i"/><path class="nf2n-db8h"/><path class="oav8s0b-u"/></g></mask></defs><path mask="url(#SVGTXxtdeJM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:save",
	});
}

export default Component;
