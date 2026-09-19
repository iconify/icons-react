import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egw0_e_yk.css';
import '../../css/g/grhwfqo-l.css';
import '../../css/d/dtbe3abpb.css';
import '../../css/d/duuf9m24f.css';
import '../../css/b/bd-g9e31d.css';
import '../../css/u/u0k47vbkf.css';
import '../../css/s/sfljat1ez.css';
import '../../css/o/oy9m5uees.css';
import '../../css/p/pvej-gvcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="egw0_e_yk"/><path class="grhwfqo-l"/><path class="dtbe3abpb"/><circle class="duuf9m24f"/><path class="bd-g9e31d"/><path class="u0k47vbkf"/><circle class="sfljat1ez"/><path class="oy9m5uees"/><path class="pvej-gvcv"/>`,
		"fallback": "eos-icons:products-outlined",
	});
}

export default Component;
