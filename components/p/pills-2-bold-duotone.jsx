import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/x-qojpb3f.css';
import '../../css/o/o1cmcabyz.css';
import '../../css/f/fw6_ppcmg.css';
import '../../css/a/aclzoz_-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="x-qojpb3f"/><path class="o1cmcabyz"/></g><path class="fw6_ppcmg"/><path class="aclzoz_-h"/>`,
		"fallback": "solar:pills-2-bold-duotone",
	});
}

export default Component;
