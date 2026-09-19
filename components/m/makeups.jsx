import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nn4_--rny.css';
import '../../css/r/rgsc31bsl.css';
import '../../css/f/f40xm6t9h.css';
import '../../css/n/nwy02mb2p.css';
import '../../css/p/p-g1mwb2w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlLxkudgu"><g class="rohhhzb0l"><path class="nn4_--rny"/><path class="rgsc31bsl"/><path class="f40xm6t9h"/><circle class="nwy02mb2p"/><circle class="p-g1mwb2w"/></g></mask></defs><path mask="url(#SVGlLxkudgu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:makeups",
	});
}

export default Component;
