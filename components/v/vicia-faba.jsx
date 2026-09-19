import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sdoteibvg.css';
import '../../css/m/mcdf-5f6l.css';
import '../../css/b/b1f263bkh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvzxhLcCT"><g class="ufeehvblu"><path class="sdoteibvg"/><path class="mcdf-5f6l"/><path class="b1f263bkh"/></g></mask></defs><path mask="url(#SVGvzxhLcCT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:vicia-faba",
	});
}

export default Component;
