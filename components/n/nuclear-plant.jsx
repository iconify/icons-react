import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co9ks3b9e.css';
import '../../css/i/ixthzbb7f.css';
import '../../css/n/ndry0d1gg.css';
import '../../css/p/pjinpmb7i.css';
import '../../css/f/fvvcnpb5m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwltxlc3i"><g class="ft5dv1b6b"><path class="co9ks3b9e"/><path class="ixthzbb7f"/><path class="ndry0d1gg"/><path class="pjinpmb7i"/><circle class="fvvcnpb5m"/></g></mask></defs><path mask="url(#SVGwltxlc3i)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:nuclear-plant",
	});
}

export default Component;
