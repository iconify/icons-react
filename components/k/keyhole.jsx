import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/z/z84e8ubat.css';
import '../../css/n/nf4n1zbnv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfHEKlDBG"><g class="adexpl72i"><path clip-rule="evenodd" class="z84e8ubat"/><path class="nf4n1zbnv"/></g></mask></defs><path mask="url(#SVGfHEKlDBG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:keyhole",
	});
}

export default Component;
