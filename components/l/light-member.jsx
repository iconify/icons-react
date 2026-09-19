import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fsq5llu2n.css';
import '../../css/t/tvoazbbvq.css';
import '../../css/f/fw-lfobsd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdA4qbe1y"><g class="s9cl3zbei"><path class="fsq5llu2n"/><path class="tvoazbbvq"/><path class="fw-lfobsd"/></g></mask></defs><path mask="url(#SVGdA4qbe1y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:light-member",
	});
}

export default Component;
