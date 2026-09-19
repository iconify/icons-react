import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/j/j_ypwpb7a.css';
import '../../css/i/i-rf7x3rz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYBDePw3h"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="j_ypwpb7a"/><path class="i-rf7x3rz"/></g></mask></defs><path mask="url(#SVGYBDePw3h)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:left-bar",
	});
}

export default Component;
