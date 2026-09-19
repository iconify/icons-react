import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lto4ctpit.css';
import '../../css/h/h-keftbiv.css';
import '../../css/z/z3ko96b0e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeSYLeVnl"><g class="ufeehvblu"><path class="lto4ctpit"/><path clip-rule="evenodd" class="h-keftbiv"/><path class="z3ko96b0e"/></g></mask></defs><path mask="url(#SVGeSYLeVnl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:monitor",
	});
}

export default Component;
