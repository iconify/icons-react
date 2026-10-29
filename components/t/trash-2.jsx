import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajzzzygli.css';
import '../../css/f/f12el4htz.css';
import '../../css/m/m9gk6ebcc.css';
import '../../css/v/vfzg48bpl.css';
import '../../css/w/wdnxuecdc.css';
import '../../css/m/mirco4b4d.css';
import '../../css/c/cl9cjrs_p.css';
import '../../css/t/tvoqaobvi.css';
import '../../css/y/yji5y3zsg.css';
import '../../css/d/d6p-4xyqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajzzzygli wm-shadow"/><path class="f12el4htz wm-k"/><path class="m9gk6ebcc wm-k"/><path class="vfzg48bpl wm-k"/><path class="wdnxuecdc wm-k"/><path class="mirco4b4d wm-k"/><path class="cl9cjrs_p wm-shine"/><path class="tvoqaobvi wm-a"/><path class="wm-a yji5y3zsg"/><path class="d6p-4xyqm wm-a"/>`,
		"fallback": "withicons-pastel:trash-2",
	});
}

export default Component;
