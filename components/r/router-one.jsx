import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spul3db_f.css';
import '../../css/s/s85l70bsb.css';
import '../../css/g/gdoio2bod.css';
import '../../css/c/coc4keugf.css';
import '../../css/z/zzeir6bkc.css';
import '../../css/z/zwcabgbia.css';
import '../../css/l/l-1sr1b0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spul3db_f"/><path clip-rule="evenodd" class="s85l70bsb"/><path class="gdoio2bod"/><path clip-rule="evenodd" class="coc4keugf"/><path class="zzeir6bkc"/><path clip-rule="evenodd" class="zwcabgbia"/><path class="l-1sr1b0l"/></g>`,
		"fallback": "icon-park-outline:router-one",
	});
}

export default Component;
