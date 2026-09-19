import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5t6sku_d.css';
import '../../css/x/xala4598m.css';
import '../../css/q/qfrd0lbpx.css';
import '../../css/h/hb--9dbkh.css';
import '../../css/m/m3mpd1bar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5t6sku_d"/><g class="xala4598m"><circle class="qfrd0lbpx"/><circle class="hb--9dbkh"/><circle class="m3mpd1bar"/></g>`,
		"fallback": "flat-color-icons:share",
	});
}

export default Component;
