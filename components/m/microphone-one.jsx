import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kwlahtbzt.css';
import '../../css/c/cplpj-rbo.css';
import '../../css/i/icfu2xbdv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDIdL4d6s"><g class="rohhhzb0l"><path class="kwlahtbzt"/><circle class="cplpj-rbo"/><path class="icfu2xbdv"/></g></mask></defs><path mask="url(#SVGDIdL4d6s)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:microphone-one",
	});
}

export default Component;
