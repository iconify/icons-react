import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tdkm5qpke.css';
import '../../css/d/d7hb9m31z.css';
import '../../css/a/a6sw0b_rd.css';
import '../../css/z/zv4skzzua.css';
import '../../css/s/sdgj1mbse.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="tdkm5qpke"/><circle class="d7hb9m31z"/><path class="a6sw0b_rd"/><path class="zv4skzzua"/><path class="sdgj1mbse"/></g>`,
		"fallback": "icon-park:radio",
	});
}

export default Component;
