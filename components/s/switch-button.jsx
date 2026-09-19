import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/dn_y4s9cj.css';
import '../../css/l/ly3952sva.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxi7i2kST"><g class="ufeehvblu"><path class="dn_y4s9cj"/><path class="ly3952sva"/></g></mask></defs><path mask="url(#SVGxi7i2kST)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:switch-button",
	});
}

export default Component;
