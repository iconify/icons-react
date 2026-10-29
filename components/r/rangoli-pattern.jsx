import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngz6bsyew.css';
import '../../css/s/s7_zl_y4r.css';
import '../../css/d/dd90m-boe.css';
import '../../css/l/lunf3scys.css';
import '../../css/o/o4e_edb1p.css';
import '../../css/h/h-j-xsxln.css';
import '../../css/c/cz0ypxv-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngz6bsyew wm-shadow"/><path class="s7_zl_y4r wm-k"/><path class="dd90m-boe wm-k"/><path class="lunf3scys wm-a"/><path class="o4e_edb1p wm-a"/><path class="h-j-xsxln wm-a"/><path class="cz0ypxv-e wm-a"/>`,
		"fallback": "withicons-pastel:rangoli-pattern",
	});
}

export default Component;
