import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/p7ymu_bsp.css';
import '../../css/p/pmpu9x01a.css';
import '../../css/a/arwk8rbqu.css';
import '../../css/i/i55dhw7ek.css';
import '../../css/f/f9u3ckb7b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpQDFuehR"><g class="rohhhzb0l"><path class="p7ymu_bsp"/><path class="pmpu9x01a"/><path class="arwk8rbqu"/><path class="i55dhw7ek"/><path class="f9u3ckb7b"/></g></mask></defs><path mask="url(#SVGpQDFuehR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rice",
	});
}

export default Component;
