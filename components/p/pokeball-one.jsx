import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/haza73b9v.css';
import '../../css/r/r58jvyboq.css';
import '../../css/y/ysimbtxlw.css';
import '../../css/q/qznx_nb7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeX6CWdHQ"><g class="ft5dv1b6b"><path class="haza73b9v"/><circle class="r58jvyboq"/><path class="ysimbtxlw"/><circle class="qznx_nb7p"/></g></mask></defs><path mask="url(#SVGeX6CWdHQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:pokeball-one",
	});
}

export default Component;
