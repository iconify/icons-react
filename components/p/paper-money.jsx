import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cyzti895k.css';
import '../../css/c/cmbowxb1u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoxqT4cMo"><g class="ufeehvblu"><path class="cyzti895k"/><path class="cmbowxb1u"/></g></mask></defs><path mask="url(#SVGoxqT4cMo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:paper-money",
	});
}

export default Component;
