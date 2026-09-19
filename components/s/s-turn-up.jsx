import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g995gab3y.css';
import '../../css/p/pkbervbtf.css';
import '../../css/s/s46jxnbyw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdoqifdjy"><g class="rohhhzb0l"><path class="g995gab3y"/><path class="pkbervbtf"/><circle transform="rotate(-180 10 11)" class="s46jxnbyw"/></g></mask></defs><path mask="url(#SVGdoqifdjy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:s-turn-up",
	});
}

export default Component;
