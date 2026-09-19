import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/lob544bai.css';
import '../../css/o/oc_uw1_ec.css';
import '../../css/s/slbmsqbwn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUq04pc1j"><g class="gopnm44um"><path class="lob544bai"/><path class="oc_uw1_ec"/><path class="slbmsqbwn"/></g></mask></defs><path mask="url(#SVGUq04pc1j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:receive",
	});
}

export default Component;
