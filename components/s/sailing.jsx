import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/w/wyjql0_kb.css';
import '../../css/u/ua493xbdi.css';
import '../../css/s/s1q69fbxu.css';
import '../../css/d/djo_6or7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkZ98JeQp"><g class="hv130ab-t"><path class="wyjql0_kb"/><path class="ua493xbdi"/><path class="s1q69fbxu"/><path class="djo_6or7z"/></g></mask></defs><path mask="url(#SVGkZ98JeQp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sailing",
	});
}

export default Component;
