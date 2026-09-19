import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/x/xedfj89fl.css';
import '../../css/o/otjj2dzfa.css';
import '../../css/m/mdc3ss7xx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGENzItdvk"><g class="rohhhzb0l"><path class="vkcj4bcdm"/><path class="xedfj89fl"/><path class="otjj2dzfa"/><path class="mdc3ss7xx"/></g></mask></defs><path mask="url(#SVGENzItdvk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:music-cd",
	});
}

export default Component;
