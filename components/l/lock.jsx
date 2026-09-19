import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a0v65gtra.css';
import '../../css/q/qebjus5ad.css';
import '../../css/e/ejxs69auf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtDIhpJdd"><g class="ufeehvblu"><rect class="a0v65gtra"/><path class="qebjus5ad"/><path class="ejxs69auf"/></g></mask></defs><path mask="url(#SVGtDIhpJdd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:lock",
	});
}

export default Component;
