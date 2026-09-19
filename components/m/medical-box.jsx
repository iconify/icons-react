import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/ky4zetb4b.css';
import '../../css/o/oc2jhta3x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhjkrxcUE"><g class="s9cl3zbei"><path class="ky4zetb4b"/><path class="oc2jhta3x"/></g></mask></defs><path mask="url(#SVGhjkrxcUE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:medical-box",
	});
}

export default Component;
