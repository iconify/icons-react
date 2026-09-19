import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/k_4pnabxr.css';
import '../../css/q/q28hijmyi.css';
import '../../css/e/ejn_mibun.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNAHyWfxo"><g class="ufeehvblu"><path class="k_4pnabxr"/><path class="q28hijmyi"/><path class="ejn_mibun"/></g></mask></defs><path mask="url(#SVGNAHyWfxo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:oil-industry",
	});
}

export default Component;
