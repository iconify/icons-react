import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/axw7lr55v.css';
import '../../css/s/sqlr_kgjy.css';
import '../../css/i/inz9m4wmz.css';
import '../../css/d/d741o543y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="axw7lr55v"/><path class="sqlr_kgjy"/><circle class="inz9m4wmz"/><circle class="d741o543y"/></g>`,
		"fallback": "icon-park-outline:scissors",
	});
}

export default Component;
