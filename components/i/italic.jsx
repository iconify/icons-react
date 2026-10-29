import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jla1e7btt.css';
import '../../css/l/l_tpc_mpj.css';
import '../../css/y/yhmymybbn.css';
import '../../css/i/iygz478ut.css';
import '../../css/p/pmpej3bmd.css';
import '../../css/x/xkghymiry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jla1e7btt wm-shadow"/><path class="l_tpc_mpj wm-k"/><path class="wm-k yhmymybbn"/><path class="iygz478ut wm-k"/><path class="pmpej3bmd wm-k"/><path class="wm-shine xkghymiry"/>`,
		"fallback": "withicons-pastel:italic",
	});
}

export default Component;
