import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/iaejugcxy.css';
import '../../css/i/idxsszrzn.css';
import '../../css/o/ofdd852ie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEqx9mcRF"><g class="ufeehvblu"><path class="iaejugcxy"/><path class="idxsszrzn"/><path class="ofdd852ie"/></g></mask></defs><path mask="url(#SVGEqx9mcRF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:notebook",
	});
}

export default Component;
